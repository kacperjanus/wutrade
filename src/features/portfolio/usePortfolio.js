import { useQueryClient } from "@tanstack/react-query";

export function usePortfolio() {
    //Pull transaction data
    const queryClient = useQueryClient();
    const transactions = queryClient.getQueryData(["transactions"]);

    if (!transactions) return;

    //Get unique companies in the transaction history
    const companies = [];
    const values = Object.values(transactions);
    for (let i = 0; i < values.length; i++)
        if (!companies.includes(values[i]?.stockId))
            companies.push(values[i].stockId);

    //Create porfolio by summing up all transations related to single company in company array
    const portfolio = [];
    companies.forEach((company) => {
        const portfolioItem = { company: company, noShares: 0 };
        for (let i = 0; i < values.length; i++)
            if (company === values[i].stockId)
                portfolioItem.noShares += values[i].quantity;

        portfolio.push(portfolioItem);
    });

    //Return companies that user owns at least one share of
    return queryClient.setQueryData(
        ["portfolio"],
        portfolio.filter((company) => company.noShares !== 0)
    );
}
