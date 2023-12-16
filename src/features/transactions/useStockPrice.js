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

export function useStockPrices({ stocks, queryKey }) {
    const { data, error, isLoading } = useQuery({
        queryFn: () => getMultipleStockPrices({ stocks }),
        queryKey: [queryKey],
    });
    //TODO convert data to objects where company is key and price is value

    if (error) throw new Error(error.message);

    return { data, isLoading };
}
