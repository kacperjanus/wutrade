import { useParams } from "react-router-dom";
import { addToWatchlist as addToWatchlistApi } from "../../services/apiWatchlist";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useAddToWatchList() {
    const { stockId } = useParams();
    const queryClient = useQueryClient();
    const { userMetadata } = queryClient.getQueryData(["user"]);

    const { mutate: addToWatchlist, isLoading } = useMutation({
        mutationFn: () =>
            addToWatchlistApi({
                stockId: stockId,
                userId: userMetadata.user_id,
            }),
        onSuccess: () =>
            toast.success(`${stockId} successfully added to watchlist`),
        onError: () => toast.error("Something went wrong"),
    });

    return { addToWatchlist, isLoading };
}
