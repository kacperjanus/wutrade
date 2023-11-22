import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getWatchlist } from "../../services/apiWatchlist";

export function useWatchlist() {
    const queryClient = useQueryClient();
    const userData = queryClient.getQueryData(["user"]);

    const { data, isLoading, error } = useQuery({
        queryKey: ["watchlist"],
        queryFn: () => getWatchlist({ userId: userData.id }),
    });

    if (error) throw new Error(error);

    return { data, isLoading };
}
