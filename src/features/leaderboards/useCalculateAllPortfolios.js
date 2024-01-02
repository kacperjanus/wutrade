import { useQueryClient } from "@tanstack/react-query";
import { useStockPrices } from "../transactions/useStockPrice";
import { useAllUserData } from "./useAllUserData";

export function useCalculateAllPortfolios() {
    const queryClient = useQueryClient();
    const transactions = queryClient.getQueryData(["allTransactions"]);
    const portfolioValuesFromDatabase = queryClient.getQueryData([
        "portfolioValues",
    ]);

    //1.1 Group transactions by user
    const groupedByUserTransactions = Object.values(
        Object.groupBy(transactions, ({ userId }) => userId)
    );

    //1.2 Get user ids
    const users = Object.keys(
        Object.groupBy(transactions, ({ userId }) => userId)
    );

    //1.3 Get unique companies from all the transactions
    const companies = Object.keys(
        Object.groupBy(transactions, ({ stockId }) => stockId)
    );

    //2.1 Pull all necessary prices
    const { data: prices, isLoading } = useStockPrices({
        stocks: companies,
        queryKey: "leaderboardsPrices",
    });

    //2.2 Pull all users data
    const { data: userData, isLoading: isLoadingUserData } = useAllUserData();

    //3. Create an array to store users' portoflios
    const calculatedPortfolioValues = [];
    if (isLoading || isLoadingUserData) return { isLoading: true };

    //4. Calculate portfolio for all users
    for (let usersTransactions of groupedByUserTransactions) {
        const userCompanies = [];
        const values = Object.values(usersTransactions);
        for (let i = 0; i < values.length; i++)
            if (!userCompanies.includes(values[i]?.stockId))
                userCompanies.push(values[i].stockId);

        const portfolio = [];
        userCompanies.forEach((company) => {
            const portfolioItem = {
                company: company,
                noShares: 0,
                pricePerShare: 0,
                totalValue: 0,
            };
            for (let i = 0; i < values.length; i++)
                if (company === values[i].stockId)
                    portfolioItem.noShares += values[i].quantity;

            portfolioItem.pricePerShare = prices?.find(
                (price) =>
                    portfolioItem.company ===
                    price?.["Global Quote - DATA DELAYED BY 15 MINUTES"]?.[
                        "01. symbol"
                    ]
            )?.["Global Quote - DATA DELAYED BY 15 MINUTES"]?.["05. price"];
            portfolioItem.totalValue =
                portfolioItem.pricePerShare * portfolioItem.noShares;

            portfolio.push(portfolioItem);
        });
        const userFromMetadataTable = userData.find(
            (user) => user.user_id === users[calculatedPortfolioValues.length]
        );
        calculatedPortfolioValues.push({
            userId: users[calculatedPortfolioValues.length],
            fullName:
                userFromMetadataTable &&
                `${userFromMetadataTable.first_name} ${userFromMetadataTable.last_name}`,
            portfolioValue: portfolio.reduce(
                (acc, item) => acc + item.totalValue,
                0
            ),
            balance: userFromMetadataTable
                ? userFromMetadataTable.balance
                : NaN,
        });
    }

    const sortedPortfolioValues = calculatedPortfolioValues.sort(
        (a, b) => b.portfolioValue + b.balance - a.portfolioValue - a.balance
    );

    const dataToPost = [];
    const today = new Date();
    const todayString = `${today.getFullYear()}-${
        Number(today.getMonth() + 1) < 10
            ? "0" + Number(today.getMonth() + 1)
            : today.getMonth() + 1
    }-${
        Number(today.getDate()) < 10 ? "0" + today.getDate() : today.getDate()
    }`;

    //5. Send portfolio values to portfolio values in the database
    for (let value of calculatedPortfolioValues) {
        const valueToPost = portfolioValuesFromDatabase?.find(
            (globalValue) =>
                globalValue.user_id === value.userId &&
                globalValue.created_at === todayString
        );
        if (!valueToPost) {
            dataToPost.push({
                created_at: todayString,
                portfolio_value: value.balance + value.portfolioValue,
                user_id: value.userId,
            });
        }
    }

    queryClient.setQueryData(["leaderboards"], sortedPortfolioValues);
    return { data: sortedPortfolioValues, dataToPost, isLoading: false };
}
