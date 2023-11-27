import PortfolioContainer from "../features/portfolio/PortfolioContainer";
import ContentBox from "../ui/ContentBox";
import PageLayout from "../ui/PageLayout";
import SectionHeader from "../ui/SectionHeader";

function Portfolio() {
    return (
        <PageLayout>
            <SectionHeader>Portfolio</SectionHeader>
            <ContentBox>
                <PortfolioContainer />
            </ContentBox>
        </PageLayout>
    );
}

export default Portfolio;
