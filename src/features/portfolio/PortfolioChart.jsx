import {
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import { formatCurrency } from "../../utils/helpers";

const CustomTooltip = function ({ payload }) {
    return (
        <div className="bg-black p-6">
            {payload[0]?.name}: {formatCurrency(payload[0]?.value)}
        </div>
    );
};

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
            <p>
                Portfolio value:{" "}
                {formatCurrency(
                    portfolio?.reduce((acc, item) => item.totalValue + acc, 0)
                )}
            </p>
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
                    <Tooltip content={<CustomTooltip />} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PortfolioChart;
