import { useMutation } from "@tanstack/react-query";
import { addTransaction as addTransactionApi } from "../../services/apiTransactions";

export function useNewTransaction() {
    const { mutate: addTransaction, isLoading } = useMutation({
        mutationFn: ({ userId, stockId, quantity, pricePerShare }) =>
            addTransactionApi({ userId, stockId, quantity, pricePerShare }),
        onSuccess: () => {},
        onError: () => {},
    });

    return { addTransaction, isLoading };
}
