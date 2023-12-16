import { formatCurrency } from "../../utils/helpers";
import Spinner from "../../ui/Spinner";
import { useCalculateAllPortfolios } from "./useCalculateAllPortfolios";

function Leaderboard() {
    const { data, isLoading } = useCalculateAllPortfolios();
    return isLoading ? (
        <Spinner />
    ) : (
        data?.map((user) => (
            <div key={user.userId}>
                {user.userId} - {formatCurrency(user.portfolioValue)}
            </div>
        ))
    );
}

export default Leaderboard;
