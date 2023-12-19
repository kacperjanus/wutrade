import { HiTrash } from "react-icons/hi";
import { useRemoveFromWatchlist } from "./useRemoveFromWatchlist";
import { useStockPrice } from "../transactions/useStockPrice";
import { formatCurrency } from "../../utils/helpers";
import GoToStockButton from "../../ui/GoToStockButton";
import BuySellButtons from "../stocks/BuySellButtons";
import { useState } from "react";

function WatchlistItem({ item }) {
    const { removeFromWatchlist, isLoading: isLoadingWatchlist } =
        useRemoveFromWatchlist();
    const handleClick = function () {
        removeFromWatchlist(item.stockId);
    };

    const [show, setShow] = useState();

    const { data, isLoading: isLoadingPrice } = useStockPrice({
        stockId: item.stockId,
    });
    const price =
        data?.["Global Quote - DATA DELAYED BY 15 MINUTES"]?.["02. open"];

    const isLoading = isLoadingPrice || isLoadingWatchlist;

    return (
        <li
            className="text-white p-2"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <div className="flex flex-row justify-between">
                <div className="w-full rounded-lg justify-between">
                    <p>
                        {item.stockId} -{" "}
                        {isLoadingPrice
                            ? "Loading..."
                            : `${formatCurrency(
                                  Number(price).toFixed(2)
                              )} per share`}{" "}
                    </p>
                </div>
                {show && (
                    <button
                        disabled={isLoading}
                        className="text-red-500 px-3"
                        onClick={handleClick}
                    >
                        <HiTrash />
                    </button>
                )}
                <BuySellButtons company={item.stockId} />
                <GoToStockButton company={item.stockId} />
            </div>
        </li>
    );
}

export default WatchlistItem;
