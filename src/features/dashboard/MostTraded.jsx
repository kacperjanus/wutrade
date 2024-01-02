import ContentBox from "../../ui/ContentBox";
import Spinner from "../../ui/Spinner";
import TopMover from "./TopMover";
import { useTopMovers } from "./useTopMovers";

function MostTraded() {
    const { data, isLoading } = useTopMovers();

    const displayData = data?.most_actively_traded?.slice(0, 5);

    return isLoading ? (
        <Spinner />
    ) : (
        <ContentBox>
            <h1 className="font-bold py-3">Most Traded</h1>
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

export default MostTraded;
