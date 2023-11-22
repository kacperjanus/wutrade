import ContentBox from "../../ui/ContentBox";
import { useWatchlist } from "../watchlist/useWatchlist";
import WatchlistItem from "../watchlist/watchlistItem";

function WatchlistPreview() {
    const { data, isLoading } = useWatchlist();
    data.slice(0, 5);
    console.log(data);
    return (
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
