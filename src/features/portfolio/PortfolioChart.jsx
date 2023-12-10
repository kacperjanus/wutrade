import {
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

function PortfolioChart({ portfolio }) {
    const data = portfolio?.map((item) => {
        return { company: item.company, value: item.totalValue };
    });

    const colors = [
        "#FF7F7F", // Slightly More Saturated Red
        "#FFA500", // Slightly More Saturated Orange
        "#7FFF7F", // Slightly More Saturated Green
        "#FFFF00", // Slightly More Saturated Yellow
        "#7F7FFF", // Slightly More Saturated Blue
        "#BF8FBF", // Slightly More Saturated Indigo
        "#D8BFD8", // Slightly More Saturated Violet
    ];

    return (
        <div>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="company"
                        cx="50%"
                        cy="50%"
                    >
                        {data?.map((entry, index) => (
                            <Cell key={entry.company} fill={colors[index]} />
                        ))}
                    </Pie>
                    <Legend
                        verticalAlign="middle"
                        align="middle"
                        width="30%"
                        layout="vertical"
                        iconSize={15}
                        iconType="circle"
                    />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PortfolioChart;
