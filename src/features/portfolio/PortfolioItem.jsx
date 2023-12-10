import GoToStockButton from "../../ui/GoToStockButton";
import { formatCurrency } from "../../utils/helpers";
import BuySellButtons from "../stocks/BuySellButtons";

function PortfolioItem({ company }) {
    return (
        <li className="p-2">
            <div className="flex flex-row justify-between">
                {company.company} - {company.noShares} shares -{" "}
                {formatCurrency(Number(company.pricePerShare).toFixed(2))} per
                share - {formatCurrency(Number(company.totalValue).toFixed(2))}
                <BuySellButtons company={company.company} />
                <GoToStockButton company={company.company} />
            </div>
        </li>
    );
}

export default PortfolioItem;
