import { useQueryClient } from "@tanstack/react-query";

function IntervalFilter({ mainInterval, setMainInterval }) {
    const queryClient = useQueryClient();

    function handleMainIntervalChange(e) {
        queryClient.removeQueries(["stockPrice"]);
        setMainInterval(e.target.value);
    }

    return (
        <>
            <div>
                <label>Choose time interval: </label>
                <select
                    onChange={handleMainIntervalChange}
                    value={mainInterval}
                    className="text-white bg-slate-900 outline-none"
                >
                    <option value="1d">1 day</option>
                    <option value="1w">1 week</option>
                    <option value="1m">1 month</option>
                    <option value="6m">6 months</option>
                    <option value="1y">1 year</option>
                    <option value="5y">5 years</option>
                    <option value="all">All</option>
                </select>
            </div>
        </>
    );
}

export default IntervalFilter;
