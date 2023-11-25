import {
    CartesianGrid,
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

    const data = times.map((item, i) => {
        return { time: item, price: Number(price[i]) };
    });

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <XAxis dataKey="time" angle={290} tickSize={20} />
                <YAxis domain={["auto", "auto"]} />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#82ca9d"
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default PriceGraph;
