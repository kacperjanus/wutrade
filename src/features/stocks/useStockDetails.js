import { useQuery } from "@tanstack/react-query";
import { getStockFundamentalData } from "../../services/apiStockData";
import { useParams } from "react-router-dom";

export function useStockFundamentalData() {
    const { stockId } = useParams();
    const { data, isLoading, error } = useQuery({
        queryKey: ["stockDetails"],
        queryFn: () => getStockFundamentalData({ stockId }),
    });

    if (error) throw new Error(error.message);

    return { data, isLoading };
}
