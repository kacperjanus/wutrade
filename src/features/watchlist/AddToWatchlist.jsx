import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import Button from "../../ui/Button";
import { useState } from "react";
import { useAddToWatchList } from "./useAddToWatchlist";
import { useRemoveFromWatchlist } from "./useRemoveFromWatchlist";
import { useParams } from "react-router-dom";

function AddToWatchlist({ watchlist }) {
    const { isLoading: isAdding, addToWatchlist } = useAddToWatchList();
    const { isLoading: isRemoving, removeFromWatchlist } =
        useRemoveFromWatchlist();
    const isLoading = isAdding || isRemoving;

    const { stockId } = useParams();

    const [added, setAdded] = useState(() =>
        watchlist?.find((item) => item.stockId === stockId) ? true : false
    );

    //TODO refresh watchlist query after clicking the button

    return (
        <Button
            type="secondary"
            disabled={isLoading}
            className="w-min"
            onClick={() => {
                setAdded((a) => !a);
                if (added) {
                    removeFromWatchlist();
                } else {
                    addToWatchlist();
                }
            }}
        >
            {added ? <HiHeart color="red" /> : <HiOutlineHeart />}
        </Button>
    );
}

export default AddToWatchlist;
