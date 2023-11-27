import GoToStockButton from "../../ui/GoToStockButton";
import BuySellButtons from "../stocks/BuySellButtons";

function PortfolioItem({ company }) {
    //TODO refresh portfolio and balance
    return (
        <li className="p-2">
            <div className="flex flex-row justify-between">
                {company.company} - {company.noShares} shares
                <BuySellButtons company={company.company} price={10000} />
                <GoToStockButton company={company.company} />
            </div>
        </li>
    );
}

export default PortfolioItem;
