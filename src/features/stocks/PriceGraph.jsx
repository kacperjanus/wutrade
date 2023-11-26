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

    //TODO make reference line when the day changes within graph domain

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ bottom: 30 }}>
                <CartesianGrid strokeDasharray="4" />
                <XAxis dataKey="time" angle={290} tickSize={20} />
                <YAxis unit="$" domain={["auto", "auto"]} />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#0ea5e9"
                    name="Price"
                    unit="$"
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default PriceGraph;
