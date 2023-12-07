import GoToStockButton from "../../ui/GoToStockButton";
import { formatCurrency } from "../../utils/helpers";
import BuySellButtons from "../stocks/BuySellButtons";
import { useStockPrice } from "../transactions/useStockPrice";

function PortfolioItem({ company }) {
    const { data, isLoading } = useStockPrice({ stockId: company.company });
    const price =
        data?.["Global Quote - DATA DELAYED BY 15 MINUTES"]?.["02. open"];

    return (
        <li className="p-2">
            <div className="flex flex-row justify-between">
                {company.company} - {company.noShares} shares -{" "}
                {isLoading
                    ? "Loading..."
                    : `${formatCurrency(Number(price).toFixed(2))} per share`}
                <BuySellButtons company={company.company} />
                <GoToStockButton company={company.company} />
            </div>
        </li>
    );
}

export default PortfolioItem;
