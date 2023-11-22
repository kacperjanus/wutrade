import { Link } from "react-router-dom";

function WatchlistItem({ item }) {
    return (
        <li className="text-white">
            <Link to={`/explore/${item.stockId}`}>{item.stockId}</Link>
        </li>
    );
}

export default WatchlistItem;
