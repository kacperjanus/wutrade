import { formatCurrency } from "../../utils/helpers";

function TopMover({ position, ticker, change_amount }) {
    return (
        <span
            className={`${
                change_amount
                    ? change_amount > 0
                        ? "text-green-500"
                        : "text-red-500"
                    : ""
            } text-lg font-medium`}
        >
            {position}. {ticker} - {formatCurrency(change_amount)}
        </span>
    );
}

export default TopMover;
