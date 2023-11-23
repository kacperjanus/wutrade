import ContentBox from "../../ui/ContentBox";
import Spinner from "../../ui/Spinner";
import { useWatchlist } from "../watchlist/useWatchlist";
import WatchlistItem from "../watchlist/watchlistItem";

function WatchlistPreview() {
    const { data, isLoading } = useWatchlist();
    data?.slice(0, 5);

    return isLoading ? (
        <Spinner />
    ) : (
        <ContentBox>
            Watchlist
            <ul>
                {data.map((item, i) => (
                    <WatchlistItem item={item} key={i} />
                ))}
            </ul>
        </ContentBox>
    );
}

export default WatchlistPreview;
