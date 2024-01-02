import { useState } from "react";
import ContentBox from "../../ui/ContentBox";
import { useTopMovers } from "./useTopMovers";
import TopMover from "./TopMover";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";

function TopMovers() {
    const [gainers, setGainers] = useState(false);

    // Get data from React Query
    const { data, isLoading: isGettingTopMovers } = useTopMovers();

    // Get TOP5 gainers or losers
    const displayData = gainers
        ? data?.top_gainers?.slice(0, 5)
        : data?.top_losers?.slice(0, 5);

    return isGettingTopMovers ? (
        <Spinner />
    ) : (
        <ContentBox>
            <div className="flex flex-row justify-between items-center">
                <h1 className="font-bold">
                    Top {gainers ? "Gainers" : "Losers"}
                </h1>
                <Button
                    type="secondary"
                    value={gainers}
                    onClick={() => setGainers((gainers) => !gainers)}
                >
                    See {gainers ? "Losers" : "Gainers"}
                </Button>
            </div>
            {displayData && displayData.length !== 0 ? (
                <ul>
                    {displayData?.map((mover, i) => (
                        <li key={mover.ticker}>
                            <TopMover position={i + 1} mover={mover} />
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
