import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromWatchlist as removeFromWatchlistApi } from "../../services/apiWatchlist";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

export function useRemoveFromWatchlist() {
    const { stockId } = useParams();
    const queryClient = useQueryClient();
    const userData = queryClient.getQueryData(["user"]);

    const { mutate: removeFromWatchlist, isLoading } = useMutation({
        mutationFn: (externalStockId) =>
            removeFromWatchlistApi({
                stockId: externalStockId ? externalStockId : stockId,
                userId: userData.id,
            }),
        onSuccess: () => {
            toast.success(
                stockId
                    ? `${stockId} successfully removed from watchlist`
                    : "Successfully removed from watchlist"
            );
            queryClient.invalidateQueries(["watchlist"]);
        },
        onError: () => toast.error("Something went wrong"),
    });

    return { removeFromWatchlist, isLoading };
}
