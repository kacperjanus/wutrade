import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUsersBalance } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdatedBalance() {
    const queryClient = useQueryClient();
    const { userMetadata } = queryClient.getQueryData(["user"]);

    const currentBalance = userMetadata.balance;

    const { mutate: updateBalance, isLoading: isUpdatingBalance } = useMutation(
        {
            mutationFn: (transactionCost) =>
                updateUsersBalance({
                    balance: currentBalance + transactionCost,
                    userId: userMetadata.user_id,
                }),
            onSuccess: () => {
                queryClient.invalidateQueries(["user"]);
            },
            onError: (err) => toast.error(err.message),
        }
    );

    return { updateBalance, isUpdatingBalance };
}
