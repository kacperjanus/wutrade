import ContentBox from "../../ui/ContentBox";
import FeaturedStock from "./FeaturedStock";

function FeaturedStocks() {
    return (
        <ContentBox>
            <div className="font-bold mb-3">Featured stocks</div>
            <div className={"flex flex-row text-center gap-2 flex-wrap"}>
                <FeaturedStock stockId="AAPL">AAPL - Apple Inc.</FeaturedStock>
                <FeaturedStock stockId="SNAP">SNAP - Snap Inc.</FeaturedStock>
                <FeaturedStock stockId="TSLA">TSLA - Tesla</FeaturedStock>
                <FeaturedStock stockId="MSFT">MSFT - Microsoft</FeaturedStock>
                <FeaturedStock stockId="KO">KO - Coca-cola</FeaturedStock>
                <FeaturedStock stockId="TTWO">
                    TTWO - Take Two Interactive
                </FeaturedStock>
                <FeaturedStock stockId="T">T - AT&T</FeaturedStock>
                <FeaturedStock stockId="JNJ">
                    JNJ - Johnson & Johnson
                </FeaturedStock>
                <FeaturedStock stockId="NVDA">NVDA - Nvidia</FeaturedStock>
                <FeaturedStock stockId="NFLX">NFLX - Netflix</FeaturedStock>
                <FeaturedStock stockId="PYPL">PYPL - PayPal</FeaturedStock>
                <FeaturedStock stockId="DIS">DIS - Walt Disney</FeaturedStock>
                <FeaturedStock stockId="ADBE">ADBE - Adobe</FeaturedStock>
                <FeaturedStock stockId="PINS">PINS - Pinterest</FeaturedStock>
            </div>
        </ContentBox>
    );
}

export default FeaturedStocks;
