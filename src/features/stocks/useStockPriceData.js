import { useQuery } from "@tanstack/react-query";
import {
    getStockDailyPriceData,
    getStockIntradayPriceData,
    getStockMonthlyPriceData,
    getStockWeeklyPriceData,
} from "../../services/apiStockData";

export function useStockPriceData({ interval, stockId, series }) {
    const {
        isLoading: isLoadingIntra,
        data: intra,
        error: errorIntra,
    } = useQuery({
        queryKey: ["stockPrice", "intraday"],
        queryFn: () => getStockIntradayPriceData({ interval, stockId }),
    });

    let data, isLoading;

    //UseQuery for daily
    const {
        isLoading: isLoadingDaily,
        data: daily,
        error: errorDaily,
    } = useQuery({
        queryKey: ["stockPrice", "daily"],
        queryFn: () => getStockDailyPriceData({ stockId }),
    });

    //UseQuery for weekly
    const {
        isLoading: isLoadingWeekly,
        data: weekly,
        error: errorWeekly,
    } = useQuery({
        queryKey: ["stockPrice", "weekly"],
        queryFn: () => getStockWeeklyPriceData({ interval, stockId }),
    });

    //UseQuery for monthly
    const {
        isLoading: isLoadingMonthly,
        data: monthly,
        error: errorMonthly,
    } = useQuery({
        queryKey: ["stockPrice", "monthly"],
        queryFn: () => getStockMonthlyPriceData({ interval, stockId }),
    });

    //Handle errors
    if (errorIntra) throw new Error(errorIntra.message);
    if (errorDaily) throw new Error(errorDaily.message);
    if (errorWeekly) throw new Error(errorWeekly.message);
    if (errorMonthly) throw new Error(errorMonthly.message);

    //Return appropriate data based on series prop
    if (series === "daily") {
        data = daily;
        isLoading = isLoadingDaily;
    }

    if (series === "weekly") {
        data = weekly;
        isLoading = isLoadingWeekly;
    }

    if (series === "monthly") {
        data = monthly;
        isLoading = isLoadingMonthly;
    }

    if (series === "intra") {
        data = intra;
        isLoading = isLoadingIntra;
    }

    return { data, isLoading };
}
