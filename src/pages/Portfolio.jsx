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
            ) : portfolio.length === 0 ? (
                <ContentBox>
                    <p className="text-white">
                        Nothing to see here. Visit EXPLORE tab to make a
                        transaction!
                    </p>
                </ContentBox>
            ) : (
                <>
                    <PortfolioChart portfolio={portfolio} />
                    <PortfolioList portfolio={portfolio} />
                </>
            )}
        </>
    );
}

export default Portfolio;
