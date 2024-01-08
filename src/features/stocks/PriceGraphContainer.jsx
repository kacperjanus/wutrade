import ContentBox from "../../ui/ContentBox";
import IntervalFilter from "./IntervalFilter";
import PriceGraph from "./PriceGraph";

function PriceGraphContainer({
    priceInterval,
    timeSeries,
    prices,
    isLoadingPriceGraph,
    mainInterval,
    setMainInterval,
}) {
    return (
        <ContentBox dataTestId="price-graph-container">
            <p className="font-bold">Price graph</p>
            <IntervalFilter
                mainInterval={mainInterval}
                setMainInterval={setMainInterval}
            />
            <PriceGraph
                prices={prices}
                interval={priceInterval}
                timeSeries={timeSeries}
                isLoadingPriceGraph={isLoadingPriceGraph}
                mainInterval={mainInterval}
            />
        </ContentBox>
    );
}

export default PriceGraphContainer;
