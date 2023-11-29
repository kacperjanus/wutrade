import Spinner from "../../ui/Spinner";
import { useTransactions } from "../transactions/useTransactions";
import PortfolioItem from "./PortfolioItem";
import { usePortfolio } from "./usePortfolio";

function PortfolioContainer() {
    const { isLoading } = useTransactions();
    const portfolio = usePortfolio();

    return isLoading ? (
        <Spinner />
    ) : (
        <ul>
            {portfolio?.map((company) => (
                <PortfolioItem key={company.company} company={company} />
            ))}
        </ul>
    );
}

export default PortfolioContainer;
