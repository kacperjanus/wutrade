import { useQuery } from "@tanstack/react-query";
import { getUserMetadata } from "../../services/apiAuth";

export function useUserMetadata({ userId }) {
    const { userMetadata, isLoading, error } = useQuery({
        queryKey: ["userMetadata"],
        queryFn: (userId) => getUserMetadata(userId),
    });

    if (error) throw new Error(error.message);

    return { userMetadata, isLoading };
}
