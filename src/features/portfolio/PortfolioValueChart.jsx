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
import ContentBox from "../../ui/ContentBox";
import { useQueryClient } from "@tanstack/react-query";
import { compareDesc, parseISO } from "date-fns";
import { formatCurrency } from "../../utils/helpers";

function PortfolioValueChart({ portfolio }) {
    const queryClient = useQueryClient();
    const user = queryClient.getQueryData(["user"]);
    const portfolio_values = queryClient.getQueryData(["portfolioValues"]);

    const graphData = portfolio_values
        .filter((value) => value.user_id === user.userMetadata.user_id)
        .sort((a, b) =>
            compareDesc(parseISO(b.created_at), parseISO(a.created_at))
        );

    return (
        <ContentBox>
            <p className="font-bold">
                Portfolio value:{" "}
                {formatCurrency(
                    portfolio?.reduce((acc, item) => item.totalValue + acc, 0)
                )}
            </p>
            {graphData.length > 0 ? (
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart
                        data={graphData}
                        margin={{ bottom: 70, left: 30, right: 30 }}
                    >
                        <CartesianGrid strokeDasharray="5 5" vertical={false} />
                        <XAxis dataKey="created_at" angle={290} tickSize={45} />
                        <YAxis
                            dataKey="portfolio_value"
                            orientation="left"
                            unit="$"
                            domain={["auto", "auto"]}
                        />
                        <Tooltip contentStyle={{ backgroundColor: "black" }} />
                        <Legend verticalAlign="top" />
                        <Line
                            type="monotone"
                            dataKey="portfolio_value"
                            stroke="#0ea5e9"
                            name="Portfolio Value"
                            unit="$"
                            strokeWidth={2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            ) : (
                <p className="text-center">Your own graph will appear soon!</p>
            )}
        </ContentBox>
    );
}

export default PortfolioValueChart;
