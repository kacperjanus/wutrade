import ContentBox from "../../ui/ContentBox";
import Leaderboard from "../leaderboards/Leaderboard";

function LeaderboardsPreview() {
    return (
        <ContentBox>
            <p className="font-bold">Leaderboards preview</p>
            <Leaderboard />
        </ContentBox>
    );
}

export default LeaderboardsPreview;
