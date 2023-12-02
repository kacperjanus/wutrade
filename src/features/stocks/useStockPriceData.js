import { useQuery } from "@tanstack/react-query";
import { getStockIntradayPriceData } from "../../services/apiStockData";

export function useStockPriceData({ interval, stockId }) {
    const { isLoading, data, error } = useQuery({
        queryKey: ["stockPrice"],
        queryFn: () => getStockIntradayPriceData({ interval, stockId }),
    });

    if (error) throw new Error(error);

    return { data, isLoading };
}
