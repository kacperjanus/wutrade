import { format } from "date-fns";
import { formatCurrency } from "../../utils/helpers";
import { Link } from "react-router-dom";

function Transaction({ data, number }) {
    const buy = data.quantity > 0;

    return (
        <li>
            <div className="my-1">
                {number}.{" "}
                <span className={`text-${buy ? "green" : "red"}-500`}>
                    {buy ? "Bought" : "Sold"} {Math.abs(data.quantity)} shares
                    of{" "}
                    <Link to={`/explore/${data.stockId}`}>{data.stockId}</Link>{" "}
                    on {format(new Date(data.createdAt), "dd MMMM yyyy H:m")} at{" "}
                    {formatCurrency(data.pricePerShare)} per share
                </span>
            </div>
        </li>
    );
}

export default Transaction;
