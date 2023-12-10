import PortfolioChart from "../features/portfolio/PortfolioChart";
import PortfolioList from "../features/portfolio/PortfolioList";
import { usePortfolio } from "../features/portfolio/usePortfolio";
import { useTransactions } from "../features/transactions/useTransactions";
import ContentBox from "../ui/ContentBox";
import SectionHeader from "../ui/SectionHeader";
import Spinner from "../ui/Spinner";

function Portfolio() {
    const { isLoading } = useTransactions();
    const portfolio = usePortfolio();

    if (isLoading) return <Spinner />;
    return (
        <>
            <SectionHeader>Portfolio</SectionHeader>
            <ContentBox>
                <PortfolioChart portfolio={portfolio} />
            </ContentBox>
            <ContentBox>
                <PortfolioList portfolio={portfolio} />
            </ContentBox>
        </>
    );
}

export default Portfolio;
