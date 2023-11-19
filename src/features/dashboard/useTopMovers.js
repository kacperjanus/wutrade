import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getTopMovers as getTopMoversApi } from "../../services/apiStockData";

export function useTopMovers() {
    const queryClient = useQueryClient();

    const { mutate: getTopMovers, isLoading } = useMutation({
        mutationFn: () => getTopMoversApi(),
        onSuccess: (data) => queryClient.setQueryData(["topMovers"], data),
        onError: (error) => {
            throw new Error(error);
        },
    });

    return { getTopMovers, isLoading };
}
