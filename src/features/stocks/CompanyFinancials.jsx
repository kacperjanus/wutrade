import ContentBox from "../../ui/ContentBox";
import { formatCurrency } from "../../utils/helpers";

function CompanyFinancials({ data }) {
    return (
        <ContentBox>
            <span className="font-bold">Financials</span>
            <div className="flex flex-col text-slate-300">
                <span>
                    Market capitalization:{" "}
                    {formatCurrency(data["MarketCapitalization"])}
                </span>
                <span>52-week-high: {formatCurrency(data["52WeekHigh"])}</span>
                <span>52-week-low: {formatCurrency(data["52WeekLow"])}</span>
                <span>
                    Profit margin: {(data["ProfitMargin"] * 100).toFixed(2)}%
                </span>
            </div>
        </ContentBox>
    );
}

export default CompanyFinancials;
