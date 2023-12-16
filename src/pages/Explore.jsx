import MostTraded from "../features/dashboard/MostTraded";
import TopMovers from "../features/dashboard/TopMovers";
import FeaturedStocks from "../features/explore/FeaturedStocks";
import SectionHeader from "../ui/SectionHeader";

function Explore() {
    return (
        <>
            <SectionHeader>Explore</SectionHeader>
            <FeaturedStocks />
            <TopMovers />
            <MostTraded />
        </>
    );
}

export default Explore;
