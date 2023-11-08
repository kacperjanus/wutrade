import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOutUser } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignOut() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: signOut, isLoading } = useMutation({
        //Try to sign out currently logged in user
        mutationFn: () => signOutUser(),
        //If successful, invalidate "user" queries
        onSuccess: () => {
            queryClient.removeQueries();
            navigate("/login");
        },
        //If unsuccessful, display appropriate message
        onError: () => {
            toast.err("Couldn't sign you out");
        },
    });

    return { signOut, isLoading };
}
