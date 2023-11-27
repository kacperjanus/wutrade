import { Link } from "react-router-dom";
import ContentBox from "../../ui/ContentBox";
import Spinner from "../../ui/Spinner";
import { useWatchlist } from "../watchlist/useWatchlist";
import WatchlistItem from "../watchlist/WatchlistItem";

function WatchlistPreview() {
    const { data, isLoading } = useWatchlist();
    const slicedWatchlist = data?.slice(0, 5);

    return isLoading ? (
        <Spinner />
    ) : (
        <ContentBox>
            <Link to="/watchlist" className="font-medium">
                Watchlist
            </Link>
            <ul>
                {slicedWatchlist.length !== 0
                    ? slicedWatchlist.map((item, i) => (
                          <WatchlistItem item={item} key={i} />
                      ))
                    : "Watchlist is empty"}
            </ul>
        </ContentBox>
    );
}

export default WatchlistPreview;
