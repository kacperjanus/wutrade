import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllTransactions } from "../../services/apiTransactions";

export function useAllTransactions() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["allTransactions"],
        queryFn: getAllTransactions,
    });

    if (error) throw new Error(error.message);

    return { data, isLoading };
}
