import { HiTrash } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useRemoveFromWatchlist } from "./useRemoveFromWatchlist";
import { useStockPrice } from "../transactions/useStockPrice";
import { formatCurrency } from "../../utils/helpers";

function WatchlistItem({ item }) {
    const { removeFromWatchlist, isLoading: isLoadingWatchlist } =
        useRemoveFromWatchlist();
    const handleClick = function () {
        removeFromWatchlist(item.stockId);
    };

    const { data, isLoading: isLoadingPrice } = useStockPrice({
        stockId: item.stockId,
    });
    const price =
        data?.["Global Quote - DATA DELAYED BY 15 MINUTES"]?.["02. open"];

    const isLoading = isLoadingPrice || isLoadingWatchlist;

    return isLoading ? (
        <p>Loading...</p>
    ) : (
        <li className="text-white ">
            <div className="flex flex-row justify-between">
                <Link
                    className="w-full py-3 px-2 hover:bg-sky-400 rounded-lg justify-between"
                    to={`/explore/${item.stockId}`}
                >
                    <p>
                        {item.stockId} -{" "}
                        {formatCurrency(Number(price).toFixed(2))} per share
                    </p>
                </Link>
                <button className="text-red-500 pl-8" onClick={handleClick}>
                    <HiTrash />
                </button>
            </div>
        </li>
    );
}

export default WatchlistItem;
