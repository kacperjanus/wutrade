import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUserMetadataRow, signUpWithEmail } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignup() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: signUp, isLoading } = useMutation({
        mutationFn: ({ firstName, lastName, email, password }) =>
            signUpWithEmail({ firstName, lastName, email, password }),
        onSuccess: (data) => {
            queryClient.setQueryData(["user"], data);
            navigate("/dashboard");
        },
        onError: () => toast.err("Signing up unsuccessful"),
    });

    return { signUp, isLoading };
}
