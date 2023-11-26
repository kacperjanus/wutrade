import WatchlistItem from "./watchlistItem";

function WatchlistContainter({ watchlist }) {
    return (
        <ul className="flex flex-col gap-3 w-full ">
            {watchlist.length !== 0
                ? watchlist.map((item, i) => (
                      <WatchlistItem key={i} item={item} />
                  ))
                : "Watchlist is empty"}
        </ul>
    );
}

export default WatchlistContainter;
