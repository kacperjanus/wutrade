import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUsersBalance } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdatedBalance() {
    const queryClient = useQueryClient();
    const {
        user_metadata: { balance: currentBalance },
    } = queryClient.getQueryData(["user"]);
    console.log(currentBalance);

    const { mutate: updateBalance, isLoading: isUpdatingBalance } = useMutation(
        {
            mutationFn: (transactionCost) =>
                updateUsersBalance({
                    balance: currentBalance + transactionCost,
                }),
            onSuccess: () => {
                queryClient.invalidateQueries(["user"]);
                toast.success("Transaction successful");
            },
            onError: (err) => toast.error(err.message),
        }
    );

    return { updateBalance, isUpdatingBalance };
}
