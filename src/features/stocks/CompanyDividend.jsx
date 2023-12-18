import ContentBox from "../../ui/ContentBox";
import { formatCurrency } from "../../utils/helpers";

function CompanyDividend({ data }) {
    return (
        <ContentBox>
            <span className="font-bold">Dividend</span>
            <div className="flex flex-col text-slate-300">
                <span>Next dividend date: {data["DividendDate"]}</span>
                <span>
                    Dividend per share:{" "}
                    {formatCurrency(data["DividendPerShare"])}
                </span>
                <span>
                    Dividend yield: {(data["DividendYield"] * 100).toFixed(2)}%
                </span>
            </div>
        </ContentBox>
    );
}

export default CompanyDividend;
