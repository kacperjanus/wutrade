import ContentBox from "../../ui/ContentBox";
import FullSpinner from "../../ui/FullSpinner";
import TopMover from "./TopMover";
import { useTopMovers } from "./useTopMovers";

function MostTraded() {
    const { data, isLoading } = useTopMovers;

    const displayData = data?.most_actively_traded?.slice(0, 5);

    return isLoading ? (
        <FullSpinner />
    ) : (
        <ContentBox>
            <h1>Most Traded</h1>
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

export default MostTraded;
