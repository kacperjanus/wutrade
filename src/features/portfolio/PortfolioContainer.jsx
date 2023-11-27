import { useTransactions } from "../transactions/useTransactions";
import PortfolioItem from "./PortfolioItem";
import { usePortfolio } from "./usePortfolio";

function PortfolioContainer() {
    const { data, isLoading } = useTransactions();
    const portfolio = usePortfolio();

    return (
        <ul>
            {portfolio?.map((company) => (
                <PortfolioItem key={company.company} company={company} />
            ))}
        </ul>
    );
}

export default PortfolioContainer;
