import PortfolioList from "../features/portfolio/PortfolioList";
import ContentBox from "../ui/ContentBox";
import SectionHeader from "../ui/SectionHeader";

function Portfolio() {
    return (
        <>
            <SectionHeader>Portfolio</SectionHeader>
            <ContentBox>
                <PortfolioList />
            </ContentBox>
        </>
    );
}

export default Portfolio;
