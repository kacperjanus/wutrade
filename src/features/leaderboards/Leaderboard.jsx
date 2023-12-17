import { formatCurrency } from "../../utils/helpers";
import Spinner from "../../ui/Spinner";
import { useCalculateAllPortfolios } from "./useCalculateAllPortfolios";

function Leaderboard() {
    const { data, isLoading } = useCalculateAllPortfolios();
    if (isLoading) return <Spinner />;

    const [first, second, third, ...rest] = data;

    return (
        <>
            <div className="rounded-md bg-amber-300 px-3 py-2 my-2 text-black">
                1. {first.userId} - {formatCurrency(first.portfolioValue)}
            </div>
            <div className="rounded-md bg-slate-300 px-3 py-1 my-2 text-black">
                2. {second.userId} - {formatCurrency(second.portfolioValue)}
            </div>
            <div className="rounded-md bg-orange-800 px-3 py-1 my-2">
                3. {third.userId} - {formatCurrency(third.portfolioValue)}
            </div>
            {rest?.map((user, i) => (
                <div
                    key={user.userId}
                    className="rounded-md bg-slate-900 px-3 py-1 my-2 text-white"
                >
                    {i + 1}. {user.userId} -{" "}
                    {formatCurrency(user.portfolioValue)}
                </div>
            ))}
        </>
    );
}

export default Leaderboard;
