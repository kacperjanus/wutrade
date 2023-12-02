import { format } from "date-fns";

function Transaction({ data, number }) {
    const buy = data.quantity > 0;

    return (
        <li>
            <div className="my-1">
                {number}.{" "}
                <span className={`text-${buy ? "green" : "red"}-500`}>
                    {buy ? "Bought" : "Sold"} {data.quantity} shares of{" "}
                    {data.stockId} on{" "}
                    {format(new Date(data.createdAt), "dd MMMM yyyy H:m")}
                </span>
            </div>
        </li>
    );
}

export default Transaction;
