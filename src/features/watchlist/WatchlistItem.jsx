import { HiTrash } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useRemoveFromWatchlist } from "./useRemoveFromWatchlist";

function WatchlistItem({ item }) {
    const { removeFromWatchlist, isLoading } = useRemoveFromWatchlist();
    const handleClick = function () {
        removeFromWatchlist(item.stockId);
    };

    return (
        <li className="text-white ">
            <div className="flex flex-row justify-between">
                <Link
                    className="w-full py-3 px-10 hover:bg-sky-400 rounded-lg justify-between"
                    to={`/explore/${item.stockId}`}
                >
                    <p>{item.stockId}</p>
                </Link>
                <button className="text-red-500 pl-8" onClick={handleClick}>
                    <HiTrash />
                </button>
            </div>
        </li>
    );
}

export default WatchlistItem;
