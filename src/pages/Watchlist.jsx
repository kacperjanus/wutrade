import { useWatchlist } from "../features/watchlist/useWatchlist";
import WatchlistItem from "../features/watchlist/watchlistItem";
import ContentBox from "../ui/ContentBox";
import PageLayout from "../ui/PageLayout";
import SectionHeader from "../ui/SectionHeader";
import Spinner from "../ui/Spinner";

function Watchlist() {
    const { data: watchlist, isLoading } = useWatchlist();

    return isLoading ? (
        <Spinner />
    ) : (
        <PageLayout>
            <SectionHeader>Watchlist</SectionHeader>
            <ContentBox>
                <ul>
                    {watchlist?.map((item, i) => (
                        <WatchlistItem
                            key={i}
                            className="text-white"
                            item={item}
                        />
                    ))}
                </ul>
            </ContentBox>
        </PageLayout>
    );
}

export default Watchlist;
