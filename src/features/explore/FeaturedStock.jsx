import { Link } from "react-router-dom";

function FeaturedStock({ stockId, children }) {
    return (
        <div className="bg-sky-600 rounded-full px-2 py-0.5">
            <Link to={`/explore/${stockId}`}>{children}</Link>
        </div>
    );
}

export default FeaturedStock;
