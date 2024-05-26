import { formatCurrency } from "../../utils/helpers";
import Spinner from "../../ui/Spinner";
import { useCalculateAllPortfolios } from "./useCalculateAllPortfolios";
import { usePostPortfolioValues } from "./usePostPortfolioValues";
import { useEffect } from "react";

function Leaderboard() {
    const { data, dataToPost, isLoading } = useCalculateAllPortfolios();
    const { postValues, isLoading: isPostingValues } = usePostPortfolioValues();

    useEffect(() => {
        if (dataToPost && dataToPost.length !== 0 && !isPostingValues && !!dataToPost[0]["portfolio_value"]) {
            postValues(dataToPost);
        }
    }, [postValues, dataToPost, isPostingValues]);

    if (isLoading || isPostingValues) return <Spinner />;

    const [first, second, third, ...rest] = data;

    return (
        <>
            <div className="rounded-md bg-amber-300 px-3 py-2 my-2 text-black">
                1. {first.fullName} -{" "}
                {formatCurrency(first.portfolioValue + first.balance)} with{" "}
                {formatCurrency(first.balance)} (
                {(
                    (first.balance / (first.portfolioValue + first.balance)) *
                    100
                ).toFixed(2)}
                %) in cash
            </div>
            <div className="rounded-md bg-slate-300 px-3 py-1 my-2 text-black">
                2. {second.fullName} -{" "}
                {formatCurrency(second.portfolioValue + second.balance)} with{" "}
                {formatCurrency(second.balance)} (
                {(
                    (second.balance /
                        (second.portfolioValue + second.balance)) *
                    100
                ).toFixed(2)}
                %) in cash
            </div>
            <div className="rounded-md bg-orange-800 px-3 py-1 my-2">
                3. {third.fullName} -{" "}
                {formatCurrency(third.portfolioValue + third.balance)} with{" "}
                {formatCurrency(third.balance)} (
                {(
                    (third.balance / (third.portfolioValue + third.balance)) *
                    100
                ).toFixed(2)}
                %) in cash
            </div>
            {rest?.map((user, i) => (
                <div
                    key={user.userId}
                    className="rounded-md bg-slate-900 px-3 py-1 my-2 text-white"
                >
                    {i + 4}. {user.fullName} -{" "}
                    {formatCurrency(user.portfolioValue + user.balance)} with{" "}
                    {formatCurrency(user.balance)} (
                    {(
                        (user.balance / (user.portfolioValue + user.balance)) *
                        100
                    ).toFixed(2)}
                    %) in cash
                </div>
            ))}
        </>
    );
}

export default Leaderboard;
