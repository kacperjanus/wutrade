import Spinner from "../../ui/Spinner";
import { useTransactions } from "../transactions/useTransactions";
import PortfolioItem from "./PortfolioItem";
import { usePortfolio } from "./usePortfolio";

function PortfolioList({ portfolio }) {
    return (
        <ul>
            {portfolio?.map((company) => (
                <PortfolioItem key={company.company} company={company} />
            ))}
        </ul>
    );
}

export default PortfolioList;
