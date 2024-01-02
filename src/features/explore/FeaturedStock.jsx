import { Link } from "react-router-dom";

function FeaturedStock({ stockId, children }) {
    return (
        <div className="bg-sky-600 hover:bg-sky-500 rounded-md px-2 py-0.5 bg-opacity-50">
            <Link to={`/explore/${stockId}`}>{children}</Link>
        </div>
    );
}

export default FeaturedStock;
