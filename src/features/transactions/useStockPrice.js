import { useQuery } from "@tanstack/react-query";
import {
    getMultipleStockPrices,
    getStockPrice,
} from "../../services/apiStockData";

export function useStockPrice({ stockId }) {
    const { data, error, isLoading } = useQuery({
        queryFn: () => getStockPrice({ stockId }),
        queryKey: ["stockPrice", stockId],
    });

    if (error) throw new Error(error.message);

    return { data, isLoading };
}

export function useStockPrices({ stocks }) {
    const { data, error, isLoading } = useQuery({
        queryFn: () => getMultipleStockPrices({ stocks }),
        queryKey: ["portfolioPrices"],
    });

    if (error) throw new Error(error.message);

    return { data, isLoading };
}
