import { useQuery } from "@tanstack/react-query";
import { getTopMovers as getTopMoversApi } from "../../services/apiStockData";

export function useTopMovers() {
    const {
        isLoading,
        data = {},
        error,
    } = useQuery({
        queryKey: ["topMovers"],
        queryFn: () => getTopMoversApi(),
    });

    if (error) throw new Error(error);

    return { data, isLoading };
}
