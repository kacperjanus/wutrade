import Leaderboard from "../features/leaderboards/Leaderboard";
import ContentBox from "../ui/ContentBox";
import SectionHeader from "../ui/SectionHeader";

function Leaderboards() {
    return (
        <>
            <SectionHeader>Leaderboards</SectionHeader>
            <ContentBox dataTestId="leaderboards-container">
                <Leaderboard />
            </ContentBox>
        </>
    );
}

export default Leaderboards;
