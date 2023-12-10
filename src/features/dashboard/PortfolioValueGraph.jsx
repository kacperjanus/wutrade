import ContentBox from "../../ui/ContentBox";
import PortfolioChart from "../portfolio/PortfolioChart";
import { usePortfolio } from "../portfolio/usePortfolio";

function PortfolioValueGraph() {
    const portfolio = usePortfolio();

    return (
        <ContentBox>
            Portfolio value
            <PortfolioChart portfolio={portfolio} />
        </ContentBox>
    );
}

export default PortfolioValueGraph;
