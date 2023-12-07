import WatchlistContainter from "../features/watchlist/WatchlistContainter";
import { useWatchlist } from "../features/watchlist/useWatchlist";
import ContentBox from "../ui/ContentBox";
import SectionHeader from "../ui/SectionHeader";
import Spinner from "../ui/Spinner";

function Watchlist() {
    const { data: watchlist, isLoading } = useWatchlist();

    return isLoading ? (
        <Spinner />
    ) : (
        <>
            <SectionHeader>Watchlist</SectionHeader>
            <ContentBox>
                <WatchlistContainter watchlist={watchlist} />
            </ContentBox>
        </>
    );
}

export default Watchlist;
