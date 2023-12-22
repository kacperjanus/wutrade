import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postPortfolioValues } from "../../services/apiLeaderboards";

export function usePostPortfolioValues() {
    const queryClient = useQueryClient();
    const {
        mutate: postValues,
        error,
        isLoading,
    } = useMutation({
        mutationFn: (valuesToPost) => postPortfolioValues(valuesToPost),
        onSuccess: () => {
            queryClient.invalidateQueries(["allTransactions"]);
            queryClient.removeQueries(["leaderboardsPrices"]);
            queryClient.removeQueries(["allUserData"]);
            queryClient.invalidateQueries(["portfolioValues"]);
        },
        onError: () => {},
    });

    return { postValues, isLoading };
}
