import { useQueryClient } from "@tanstack/react-query";
import ContentBox from "../../ui/ContentBox";
import { formatCurrency } from "../../utils/helpers";

function AccountStats() {
    const queryClient = useQueryClient();
    const transactions = queryClient.getQueryData(["transactions"]);
    const portfolio = queryClient.getQueryData(["portfolio"]);
    const user = queryClient.getQueryData(["user"]);

    const highestTransaction = transactions.find(
        (transaction) =>
            transaction.quantity * transaction.pricePerShare ===
            Math.max(
                ...transactions.map(
                    (transaction) =>
                        transaction.quantity * transaction.pricePerShare
                )
            )
    );

    const nubmerOfStocksInPortfolio = Object.keys(
        Object.groupBy(transactions, ({ stockId }) => stockId)
    ).length;

    const averageTransactionPrice = formatCurrency(
        transactions.reduce(
            (acc, transaction) =>
                transaction.quantity * transaction.pricePerShare + acc,
            0
        ) / transactions.length
    );

    const cashReserve = (
        (user.userMetadata.balance /
            (portfolio?.reduce((acc, item) => item.totalValue + acc, 0) +
                user.userMetadata.balance)) *
        100
    ).toFixed(2);

    const groupedTransactionsByCompany = Object.groupBy(
        transactions,
        ({ stockId }) => stockId
    );

    const mostOftenTradedStock = {
        numerOfTimes: Math.max(
            ...Object.values(groupedTransactionsByCompany).map(
                (company) => company.length
            )
        ),
        companies: Object.keys(groupedTransactionsByCompany).filter(
            (company) =>
                groupedTransactionsByCompany[company].length ===
                Math.max(
                    ...Object.values(groupedTransactionsByCompany).map(
                        (company) => company.length
                    )
                )
        ),
    };

    console.log(mostOftenTradedStock);

    return (
        <ContentBox>
            <p className="font-bold">Account statistics</p>
            <p>
                Highest transaction: {highestTransaction.stockId} for{" "}
                {formatCurrency(
                    highestTransaction.quantity *
                        highestTransaction.pricePerShare
                )}{" "}
                ({highestTransaction.quantity} shares for{" "}
                {formatCurrency(highestTransaction.pricePerShare)} each){" "}
            </p>
            <p>
                Profit made:{" "}
                {formatCurrency(
                    portfolio?.reduce((acc, item) => item.totalValue + acc, 0) +
                        user.userMetadata.balance -
                        200000
                )}{" "}
            </p>
            <p>
                Most often traded stock: {mostOftenTradedStock.numerOfTimes} for{" "}
                {mostOftenTradedStock.companies.join(", ")}
            </p>
            <p>Number of stocks in portfolio: {nubmerOfStocksInPortfolio} </p>
            <p>Average transaction price: {averageTransactionPrice} </p>
            <p>Cash reserve percentage: {cashReserve}% </p>
        </ContentBox>
    );
}

export default AccountStats;
