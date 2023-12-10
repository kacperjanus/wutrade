import PortfolioItem from "./PortfolioItem";

function PortfolioList({ portfolio }) {
    return (
        <ul>
            {portfolio?.map((company) => (
                <PortfolioItem key={company.company} company={company} />
            ))}
        </ul>
    );
}

export default PortfolioList;
