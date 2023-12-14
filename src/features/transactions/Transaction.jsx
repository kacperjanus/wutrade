import { format } from "date-fns";
import { formatCurrency } from "../../utils/helpers";
import { Link } from "react-router-dom";

function Transaction({ data, number }) {
    const buy = data.quantity > 0;

    return (
        <li>
            <div className="my-2 rounded-md bg-slate-700 bg-opacity-40 py-2 px-5 hover:shadow-lg">
                {number}.{" "}
                <span className={`text-${buy ? "green" : "red"}-500`}>
                    {buy ? "Bought" : "Sold"} {Math.abs(data.quantity)} shares
                    of{" "}
                    <Link className="font-bold" to={`/explore/${data.stockId}`}>
                        {data.stockId}
                    </Link>{" "}
                    on {format(new Date(data.createdAt), "dd MMMM yyyy H:m")} at{" "}
                    {formatCurrency(data.pricePerShare)} per share
                </span>
            </div>
        </li>
    );
}

export default Transaction;
