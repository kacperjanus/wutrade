import { useQuery } from "@tanstack/react-query";
import { getPortfolioValues } from "../../services/apiPortfolio";

export function usePortfolioValues({ userId }) {
    const { data: portfolio_values, isLoading } = useQuery({
        queryFn: () => getPortfolioValues({ userId }),
        queryKey: ["portfolioValues"],
    });

    return { portfolio_values, isLoading };
}
