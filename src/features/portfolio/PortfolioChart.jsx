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
        "#F57963",
        "#FFD662",
        "#4FAE95",
        "#54C1FF",
        "#8F47B3",
        "#FF7C54",
        "#5AEC6B",
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
