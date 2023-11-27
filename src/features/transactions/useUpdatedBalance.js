import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUsersBalance } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdatedBalance() {
    const queryClient = useQueryClient();
    const {
        user_metadata: { balance: currentBalance },
    } = queryClient.getQueryData(["user"]);

    const { mutate: updateBalance, isLoading: isUpdatingBalance } = useMutation(
        {
            mutationFn: (transactionCost) =>
                updateUsersBalance({
                    balance: currentBalance + transactionCost,
                }),
            onSuccess: () => {
                queryClient.invalidateQueries(["user"]);
            },
            onError: (err) => toast.error(err.message),
        }
    );

    return { updateBalance, isUpdatingBalance };
}
