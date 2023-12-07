import PortfolioContainer from "../features/portfolio/PortfolioContainer";
import ContentBox from "../ui/ContentBox";
import SectionHeader from "../ui/SectionHeader";

function Portfolio() {
    return (
        <>
            <SectionHeader>Portfolio</SectionHeader>
            <ContentBox>
                <PortfolioContainer />
            </ContentBox>
        </>
    );
}

export default Portfolio;
