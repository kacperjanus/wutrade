import { useMutation, useQueryClient } from "@tanstack/react-query";
import { resetAccount as resetAccountApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useResetAccount() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutate: resetAccount, isLoading } = useMutation({
        mutationFn: (userId) => resetAccountApi({ userId }),
        onSuccess: () => {
            toast.success("Account reseted successfully!");
            navigate("/dashboard");
            queryClient.invalidateQueries(["watchlist"]);
            queryClient.invalidateQueries(["transactions"]);
            queryClient.removeQueries(["portfolio"]);
            queryClient.removeQueries(["portfolioPrices"]);
        },
        onError: () => {
            toast.error("Couldn't reset the account");
        },
    });

    return { resetAccount, isLoading };
}
