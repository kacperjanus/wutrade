import SectionHeader from "../ui/SectionHeader";
import TopMovers from "../features/dashboard/TopMovers";
import PortfolioValueGraph from "../features/dashboard/PortfolioValueGraph";
import MostTraded from "../features/dashboard/MostTraded";
import WatchlistPreview from "../features/dashboard/WatchlistPreview";
import LeaderboardsPreview from "../features/dashboard/LeaderboardsPreview";

function Dashboard() {
    // 1. Portfolio value chart
    // 2. Top Movers/Losers and Most Traded
    // 3. Watchlist preview with button to go to /dashboard
    // 4. Leaderboard preview

    return (
        <>
            <SectionHeader>Dashboard</SectionHeader>
            <PortfolioValueGraph />
            <div className="flex gap-6">
                <TopMovers />
                <MostTraded />
            </div>
            <WatchlistPreview />
            <LeaderboardsPreview />
        </>
    );
}

export default Dashboard;
