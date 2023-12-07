import FeaturedStock from "../features/explore/FeaturedStock";
import ContentBox from "../ui/ContentBox";
import SectionHeader from "../ui/SectionHeader";

function Explore() {
    return (
        <>
            <SectionHeader>Explore</SectionHeader>
            <div className="flex flex-col gap-5">
                <ContentBox>
                    <span className="font-bold">Featured stocks</span>
                    <div className={"flex flex-row gap-2"}>
                        <FeaturedStock stockId="AAPL">Apple Inc.</FeaturedStock>
                        <FeaturedStock stockId="SNAP">Snap Inc.</FeaturedStock>
                        <FeaturedStock stockId="TSLA">Tesla</FeaturedStock>
                        <FeaturedStock stockId="MSFT">Microsoft</FeaturedStock>
                        <FeaturedStock stockId="KO">Coca-cola</FeaturedStock>
                        <FeaturedStock stockId="NKE">Nike</FeaturedStock>
                    </div>
                </ContentBox>
            </div>
        </>
    );
}

export default Explore;
