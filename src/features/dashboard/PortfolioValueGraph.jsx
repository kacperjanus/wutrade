import ContentBox from "../../ui/ContentBox";
import Spinner from "../../ui/Spinner";
import { formatCurrency } from "../../utils/helpers";
import PortfolioChart from "../portfolio/PortfolioChart";
import { usePortfolio } from "../portfolio/usePortfolio";

function PortfolioValueGraph() {
    const { isLoading, portfolio } = usePortfolio();

    return (
        <ContentBox>
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    <p>
                        Portfolio value:{" "}
                        {formatCurrency(
                            portfolio?.reduce(
                                (acc, item) => item.totalValue + acc,
                                0
                            )
                        )}
                    </p>
                    <PortfolioChart portfolio={portfolio} />
                </>
            )}
        </ContentBox>
    );
}

export default PortfolioValueGraph;
