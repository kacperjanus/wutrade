import WatchlistItem from "./WatchlistItem";

function WatchlistContainter({ watchlist }) {
    return (
        <ul className="flex flex-col w-full ">
            {watchlist.length !== 0 ? (
                watchlist.map((item, i) => (
                    <WatchlistItem key={i} item={item} />
                ))
            ) : (
                <p className="text-center text-lg">
                    Watchlist is empty.
                    <br /> Add company to watchlist by clicking the Heart icon
                    on Stock Details page
                </p>
            )}
        </ul>
    );
}

export default WatchlistContainter;
