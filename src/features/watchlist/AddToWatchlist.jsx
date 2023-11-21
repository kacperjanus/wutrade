import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import Button from "../../ui/Button";
import { useState } from "react";
import { useAddToWatchList } from "./useAddToWatchlist";
import { useRemoveFromWatchlist } from "./useRemoveFromWatchlist";

function AddToWatchlist() {
    const [added, setAdded] = useState(true);
    const { isLoading: isAdding, addToWatchlist } = useAddToWatchList();
    const { isLoading: isRemoving, removeFromWatchlist } =
        useRemoveFromWatchlist();
    const isLoading = isAdding || isRemoving;

    return (
        <Button
            type="secondary"
            disabled={isLoading}
            className="w-min"
            onClick={() => {
                setAdded((a) => !a);
                addToWatchlist();
            }}
        >
            {added ? <HiHeart color="red" /> : <HiOutlineHeart />}
        </Button>
    );
}

export default AddToWatchlist;
