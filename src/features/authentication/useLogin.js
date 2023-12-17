import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signInWithEmail } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: login, isLoading } = useMutation({
        //Try to sign user in
        mutationFn: ({ email, password }) =>
            signInWithEmail({ email, password }),
        //If successful set "user" query in React Query and navigate to dashboard
        onSuccess: ({ userData, userMetadata }) => {
            queryClient.setQueryData(["user"], {
                userData,
                userMetadata,
            });
            navigate("/dashboard", { replace: true });
        },
        //If unsuccessful display appropriate message on the screen
        onError: (err) => toast.error(err.message),
    });

    return { login, isLoading };
}
