import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";

function TopMover({ position, mover }) {
    return (
        <>
            <span className="text-lg font-medium text-white"> {position}.</span>
            <Link to={`/explore/${mover.ticker}`}> {mover.ticker} -</Link>
            <span
                className={`${
                    mover.change_amount
                        ? mover.change_amount > 0
                            ? "text-green-500"
                            : "text-red-500"
                        : ""
                } text-lg font-medium`}
            >
                {" "}
                {formatCurrency(mover.change_amount)} ({mover.change_percentage}
                )
            </span>
            <span className="text-white"> - {mover.volume / 1000}k shares</span>
        </>
    );
}

export default TopMover;
