import { useEffect } from "react";
import ContentBox from "../../ui/ContentBox";
import { useTopMovers } from "./useTopMovers";
import { useQueryClient } from "@tanstack/react-query";
import FullSpinner from "../../ui/FullSpinner";
import TopMover from "./TopMover";

function TopMovers() {
    const { getTopMovers, isLoading: isGettingTopMovers } = useTopMovers();
    const queryClient = useQueryClient();

    const data = queryClient.getQueryData(["topMovers"]);

    // useEffect(() => getTopMovers(), [getTopMovers]);

    return isGettingTopMovers ? (
        <FullSpinner />
    ) : (
        <ContentBox>
            <h1>Top Movers/Losers</h1>
            <div className="flex gap-5">
                <ul>
                    <TopMover
                        ticker={data?.top_gainers[0].ticker}
                        change_amount={data?.top_gainers[0].change_amount}
                    />
                    <TopMover
                        ticker={data?.top_gainers[1].ticker}
                        change_amount={data?.top_gainers[1].change_amount}
                    />
                    <TopMover
                        ticker={data?.top_gainers[2].ticker}
                        change_amount={data?.top_gainers[2].change_amount}
                    />
                    <TopMover
                        ticker={data?.top_gainers[3].ticker}
                        change_amount={data?.top_gainers[3].change_amount}
                    />
                    <TopMover
                        ticker={data?.top_gainers[4].ticker}
                        change_amount={data?.top_gainers[4].change_amount}
                    />
                </ul>
                <ul>
                    <TopMover
                        ticker={data?.top_losers[0].ticker}
                        change_amount={data?.top_losers[0].change_amount}
                    />
                    <TopMover
                        ticker={data?.top_losers[1].ticker}
                        change_amount={data?.top_losers[1].change_amount}
                    />
                    <TopMover
                        ticker={data?.top_losers[2].ticker}
                        change_amount={data?.top_losers[2].change_amount}
                    />
                    <TopMover
                        ticker={data?.top_losers[3].ticker}
                        change_amount={data?.top_losers[3].change_amount}
                    />
                    <TopMover
                        ticker={data?.top_losers[4].ticker}
                        change_amount={data?.top_losers[4].change_amount}
                    />
                </ul>
            </div>
        </ContentBox>
    );
}

export default TopMovers;
