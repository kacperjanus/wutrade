import { useQueryClient } from "@tanstack/react-query";
import { useStockPrices } from "../transactions/useStockPrice";

export function usePortfolio() {
    //Pull transaction data
    const queryClient = useQueryClient();
    const transactions = queryClient.getQueryData(["transactions"]) || [];

    //Get unique companies in the transaction history
    const companies = [];
    const values = Object.values(transactions);
    for (let i = 0; i < values.length; i++)
        if (!companies.includes(values[i]?.stockId))
            companies.push(values[i].stockId);

    //FIX hook is called with companies array being empty
    //TODO pull the prices for companies that user has more than 0 number of shares
    const { data: prices, isLoading } = useStockPrices({
        stocks: companies,
    });

    if (isLoading || !prices || prices.length === 0) return { isLoading: true };

    //Create porfolio by summing up all transations related to single company in company array
    const portfolio = [];
    companies.forEach((company, i) => {
        const portfolioItem = {
            company: company,
            noShares: 0,
            pricePerShare: 0,
            totalValue: 0,
        };
        for (let i = 0; i < values.length; i++)
            if (company === values[i].stockId)
                portfolioItem.noShares += values[i].quantity;

        portfolioItem.pricePerShare =
            prices[i]?.["Global Quote - DATA DELAYED BY 15 MINUTES"][
                "05. price"
            ];
        portfolioItem.totalValue =
            portfolioItem.pricePerShare * portfolioItem.noShares;

        portfolio.push(portfolioItem);
    });
    const finalPortfolio = queryClient.setQueryData(
        ["portfolio"],
        portfolio.filter((company) => company.noShares !== 0)
    );

    //Return companies that user owns at least one share of
    return { portfolio: finalPortfolio, isLoading: false };
}
