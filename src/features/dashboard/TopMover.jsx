function TopMover({ ticker, change_amount }) {
    return (
        <li
            className={`${
                change_amount > 0 ? "text-green-500" : "text-red-500"
            }`}
        >
            1. {ticker} - {change_amount}
        </li>
    );
}

export default TopMover;
