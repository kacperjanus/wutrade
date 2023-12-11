import ContentBox from "../../ui/ContentBox";
import Spinner from "../../ui/Spinner";
import { formatCurrency } from "../../utils/helpers";
import PortfolioChart from "../portfolio/PortfolioChart";
import { usePortfolio } from "../portfolio/usePortfolio";

function PortfolioValueGraph() {
    const { isLoading, portfolio } = usePortfolio();

    return (
        <ContentBox>
            {isLoading ? <Spinner /> : <PortfolioChart portfolio={portfolio} />}
        </ContentBox>
    );
}

export default PortfolioValueGraph;
