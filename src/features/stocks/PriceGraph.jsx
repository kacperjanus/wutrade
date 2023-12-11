import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import Spinner from "../../ui/Spinner";

function PriceGraph({ prices, interval, isLoadingPriceGraph, timeSeries }) {
    if (isLoadingPriceGraph) return <Spinner />;

    const objectKey = {
        intra: `Time Series (${interval})`,
        daily: `Time Series (Daily)`,
        weekly: `Weekly Time Series`,
        monthly: `Monthly Time Series`,
    };

    const times =
        timeSeries === "intra"
            ? Object.keys(prices[objectKey[timeSeries]])
                  .map((item) => item.substring(11, 16))
                  .reverse()
            : Object.keys(prices[objectKey[timeSeries]]).reverse();

    const price = Object.values(prices[objectKey[timeSeries]])
        .map((item) => item["1. open"])
        .reverse();

    const volume = Object.values(prices[objectKey[timeSeries]])
        .map((item) => item["5. volume"] / 1000)
        .reverse();

    const data = times.map((item, i) => {
        return {
            time: item,
            price: Number(price[i]),
            volume: Number(volume[i]),
        };
    });

    //TODO make reference line when the day changes within graph domain for intraday trading

    return (
        <div className="mt-3">
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    data={data}
                    margin={{ bottom: 80, left: 30, right: 30 }}
                >
                    <CartesianGrid strokeDasharray="5 5" vertical={false} />
                    <XAxis
                        dataKey="time"
                        angle={290}
                        tickSize={timeSeries === "intra" ? 25 : 35}
                        fontSize={timeSeries === "intra" ? 15 : 10}
                    />
                    <YAxis
                        dataKey="price"
                        yAxisId="left"
                        orientation="left"
                        unit="$"
                        domain={["auto", "auto"]}
                        allowDataOverflow={true}
                    />
                    <YAxis
                        dataKey="volume"
                        yAxisId="right"
                        unit="k"
                        orientation="right"
                        domain={["auto", "auto"]}
                    />
                    <Tooltip contentStyle={{ backgroundColor: "black" }} />
                    <Legend verticalAlign="top" />
                    <Line
                        type="monotone"
                        dataKey="price"
                        stroke="#0ea5e9"
                        name="Price"
                        unit="$"
                        dot={false}
                        strokeWidth={2}
                        yAxisId="left"
                    />
                    <Line
                        type="monotone"
                        dataKey="volume"
                        stroke="#0ea"
                        name="Volume"
                        unit="k units"
                        yAxisId="right"
                        dot={false}
                        strokeWidth={2}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PriceGraph;
