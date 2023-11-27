import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTransactions } from "../../services/apiTransactions";

export function useTransactions() {
    const queryClient = useQueryClient();
    const userData = queryClient.getQueryData(["user"]);

    const { data, error, isLoading } = useQuery({
        queryKey: ["transactions"],
        queryFn: () => getTransactions({ userId: userData.id }),
    });

    if (error) throw new Error(error.message);

    return { data, isLoading };
}
