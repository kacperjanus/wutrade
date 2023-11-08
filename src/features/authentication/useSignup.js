import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCurrentUser, signUpWithEmail } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignup() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: signUp, isLoading } = useMutation({
        mutationFn: ({ email, password }) =>
            signUpWithEmail({ email, password }),
        onSuccess: (data) => {
            queryClient.setQueryData(["user"], data.user);
            navigate("/dashboard");
        },
        onError: (err) => toast.err("Signing up unsuccessful"),
    });

    return { signUp, isLoading };
}
