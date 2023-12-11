import PortfolioChart from "../features/portfolio/PortfolioChart";
import PortfolioList from "../features/portfolio/PortfolioList";
import { usePortfolio } from "../features/portfolio/usePortfolio";
import { useTransactions } from "../features/transactions/useTransactions";
import ContentBox from "../ui/ContentBox";
import SectionHeader from "../ui/SectionHeader";
import Spinner from "../ui/Spinner";

function Portfolio() {
    const { isLoading: isLoadingTransactions } = useTransactions();
    const { portfolio, isLoading: isLoadingPortfolio } = usePortfolio();

    return (
        <>
            <SectionHeader>Portfolio</SectionHeader>
            {isLoadingTransactions || isLoadingPortfolio ? (
                <Spinner />
            ) : (
                <>
                    <ContentBox>
                        <PortfolioChart portfolio={portfolio} />
                    </ContentBox>
                    <ContentBox>
                        <PortfolioList portfolio={portfolio} />
                    </ContentBox>
                </>
            )}
        </>
    );
}

export default Portfolio;
