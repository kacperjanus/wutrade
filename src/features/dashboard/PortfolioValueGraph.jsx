import ContentBox from "../../ui/ContentBox";
import { formatCurrency } from "../../utils/helpers";
import PortfolioChart from "../portfolio/PortfolioChart";
import { usePortfolio } from "../portfolio/usePortfolio";

function PortfolioValueGraph() {
    const portfolio = usePortfolio();

    return (
        <ContentBox>
            Portfolio value:{" "}
            {formatCurrency(
                portfolio?.reduce((acc, item) => item.totalValue + acc, 0)
            )}
            <PortfolioChart portfolio={portfolio} />
        </ContentBox>
    );
}

export default PortfolioValueGraph;
