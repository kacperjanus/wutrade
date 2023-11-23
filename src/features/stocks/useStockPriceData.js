import { useQuery } from "@tanstack/react-query";
import { getStockIntradayPriceData } from "../../services/apiStockData";
import { useParams } from "react-router-dom";

export function useStockPriceData({ interval }) {
    const { stockId } = useParams();
    const { isLoading, data, error } = useQuery({
        queryKey: ["stockPrice"],
        queryFn: () => getStockIntradayPriceData({ interval, stockId }),
    });

    if (error) throw new Error(error);

    return { data, isLoading };
}
