import { useQueryClient } from "@tanstack/react-query";
import { useStockPrices } from "../transactions/useStockPrice";

export function useCalculateAllPortfolios() {
    const queryClient = useQueryClient();
    const transactions = queryClient.getQueryData(["allTransactions"]);

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

    //3. Create an array to store users' portoflios
    const portfolioValues = [];

    if (isLoading) return { isLoading: true };

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
        portfolioValues.push({
            userId: users[portfolioValues.length],
            portfolioValue: portfolio.reduce(
                (acc, item) => acc + item.totalValue,
                0
            ),
        });
    }

    const sortedPortfolioValues = portfolioValues.sort(
        (a, b) => b.portfolioValue - a.portfolioValue
    );

    //5. Send portfolio values to portfolio values in the database
    //TODO post portfolio values to the database
    queryClient.setQueryData(["leaderboards"], sortedPortfolioValues);
    return { data: sortedPortfolioValues, isLoading: false };
}
