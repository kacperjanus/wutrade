function Transaction({ data, number }) {
    console.log(data);
    return (
        <li>
            <div className="my-1">
                {number}.{" "}
                {data.quantity > 0 ? (
                    <span className="text-green-500">
                        Bought {data.quantity} shares of {data.stockId} on
                        {data.createdAt}
                    </span>
                ) : (
                    <span className="text-red-500">
                        Sold {data.quantity * -1} shares of {data.stockId} on{" "}
                        {data.createdAt}
                    </span>
                )}
            </div>
        </li>
    );
}

export default Transaction;
