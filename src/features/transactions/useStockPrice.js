import { useQuery } from "@tanstack/react-query";
import { getStockPrice } from "../../services/apiStockData";

export function useStockPrice({ stockId }) {
    const { data, error, isLoading } = useQuery({
        queryFn: () => getStockPrice({ stockId }),
        queryKey: ["transactionStock"],
    });

    if (error) throw new Error(error.message);

    return { data, isLoading };
}
