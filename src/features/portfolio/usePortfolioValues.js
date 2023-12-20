import { useQuery } from "@tanstack/react-query";
import { getPortfolioValues } from "../../services/apiPortfolio";

export function usePortfolioValues() {
    const { data: portfolio_values, isLoading } = useQuery({
        queryFn: () => getPortfolioValues(),
        queryKey: ["portfolioValues"],
    });

    return { portfolio_values, isLoading };
}
