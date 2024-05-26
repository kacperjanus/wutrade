import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postPortfolioValues } from "../../services/apiLeaderboards";

export function usePostPortfolioValues() {
    const queryClient = useQueryClient();
    const {
        mutate: postValues,
        isLoading,
    } = useMutation({
        mutationFn: (valuesToPost) => postPortfolioValues(valuesToPost),
        onSuccess: () => {
            queryClient.invalidateQueries(["allTransactions"]);
            queryClient.removeQueries(["leaderboardsPrices"]);
            queryClient.removeQueries(["allUserData"]);
            queryClient.invalidateQueries(["portfolioValues"]);
        },
        onError: (error) => {
            throw new Error(error.message)
        },
    },
    {
        retry: 3
    }
    );

    return { postValues, isLoading };
}
