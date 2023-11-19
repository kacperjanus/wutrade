import PageLayout from "../ui/PageLayout";
import SectionHeader from "../ui/SectionHeader";
import FullSpinner from "../ui/FullSpinner";
import TopMovers from "../features/dashboard/TopMovers";

function Dashboard() {
    // 1. Portfolio value chart
    // 2. Top Movers/Losers and Most Traded
    // 3. Watchlist preview with button to go to /dashboard
    // 4. Leaderboard preview

    return (
        <PageLayout>
            <SectionHeader>Dashboard</SectionHeader>
            <TopMovers />
        </PageLayout>
    );
}

export default Dashboard;
