import ContentBox from "../../ui/ContentBox";
import IntervalFilter from "./IntervalFilter";
import PriceGraph from "./PriceGraph";

function PriceGraphContainer({
    priceInterval,
    setPriceInterval,
    timeSeries,
    setTimeSeries,
    prices,
    isLoadingPriceGraph,
}) {
    return (
        <ContentBox>
            <p className="font-bold">Price graph</p>
            <IntervalFilter
                priceInterval={priceInterval}
                setPriceInterval={setPriceInterval}
                timeSeries={timeSeries}
                setTimeSeries={setTimeSeries}
            />
            <PriceGraph
                prices={prices}
                interval={priceInterval}
                timeSeries={timeSeries}
                isLoadingPriceGraph={isLoadingPriceGraph}
            />
        </ContentBox>
    );
}

export default PriceGraphContainer;
