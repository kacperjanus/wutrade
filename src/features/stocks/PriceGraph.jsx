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

function PriceGraph({ prices }) {
    const times = Object.keys(prices["Time Series (5min)"])
        .map((item) => item.substring(11, 16))
        .reverse();
    const price = Object.values(prices["Time Series (5min)"])
        .map((item) => item["1. open"])
        .reverse();

    const volume = Object.values(prices["Time Series (5min)"])
        .map((item) => item["5. volume"])
        .reverse();

    const data = times.map((item, i) => {
        return {
            time: item,
            price: Number(price[i]),
            volume: Number(volume[i]),
        };
    });

    //TODO make reference line when the day changes within graph domain

    return (
        <div className="mt-3">
            <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    data={data}
                    margin={{ bottom: 30, left: 30, right: 30 }}
                >
                    <CartesianGrid strokeDasharray="5 5" vertical={false} />
                    <XAxis dataKey="time" angle={290} tickSize={20} />
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
                        unit=" units"
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
