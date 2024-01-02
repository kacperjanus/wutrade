import Spinner from "../../ui/Spinner";
import PortfolioValueChart from "../portfolio/PortfolioValueChart";
import { usePortfolio } from "../portfolio/usePortfolio";

function PortfolioValueGraph() {
    const { isLoading, portfolio } = usePortfolio();

    return isLoading ? (
        <Spinner />
    ) : (
        <PortfolioValueChart portfolio={portfolio} />
    );
}

export default PortfolioValueGraph;
