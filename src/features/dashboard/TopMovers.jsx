import { useState } from "react";
import ContentBox from "../../ui/ContentBox";
import { useTopMovers } from "./useTopMovers";
import FullSpinner from "../../ui/FullSpinner";
import TopMover from "./TopMover";

function TopMovers() {
    const [gainers, setGainers] = useState(false);

    // Get data from React Query
    const { data, isLoading: isGettingTopMovers } = useTopMovers();

    // Get TOP5 gainers or losers
    const displayData = gainers
        ? data?.top_gainers?.slice(0, 5)
        : data?.top_losers?.slice(0, 5);

    return isGettingTopMovers ? (
        <FullSpinner />
    ) : (
        <ContentBox>
            <div className="flex flex-row justify-between items-center">
                <h1>Top {gainers ? "Gainers" : "Losers"}</h1>
                <button
                    type="secondary"
                    value={gainers}
                    onClick={() => setGainers((gainers) => !gainers)}
                >
                    See {gainers ? "Losers" : "Gainers"}
                </button>
            </div>
            {displayData ? (
                <ul>
                    {displayData?.map((mover, i) => (
                        <li>
                            <TopMover
                                position={i + 1}
                                ticker={mover.ticker}
                                change_amount={mover.change_amount}
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                "No data to display"
            )}
        </ContentBox>
    );
}

export default TopMovers;
