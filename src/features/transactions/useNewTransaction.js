import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTransaction as addTransactionApi } from "../../services/apiTransactions";

export function useNewTransaction() {
    const queryClient = useQueryClient();
    const { mutate: addTransaction, isLoading } = useMutation({
        mutationFn: ({ userId, stockId, quantity, pricePerShare }) =>
            addTransactionApi({ userId, stockId, quantity, pricePerShare }),
        onSuccess: () => {
            queryClient.invalidateQueries(["transactions"]);
            queryClient.invalidateQueries(["portfolio"]);
            queryClient.removeQueries(["portfolioPrices"]);
        },
        onError: () => {},
    });

    return { addTransaction, isLoading };
}
