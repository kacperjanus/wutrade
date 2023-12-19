import ContentBox from "../../ui/ContentBox";
import PortfolioItem from "./PortfolioItem";

function PortfolioList({ portfolio }) {
    return (
        <ContentBox>
            <ul>
                {portfolio?.map((company) => (
                    <PortfolioItem key={company.company} company={company} />
                ))}
            </ul>
        </ContentBox>
    );
}

export default PortfolioList;
