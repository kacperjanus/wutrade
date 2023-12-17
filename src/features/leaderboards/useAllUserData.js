import { useQuery } from "@tanstack/react-query";
import { getAllUserData } from "../../services/apiLeaderboards";

export function useAllUserData() {
    const { data, error, isLoading } = useQuery({
        queryFn: getAllUserData,
        queryKey: ["allUserData"],
    });

    if (error) throw new Error(error.message);

    return { data, isLoading };
}
