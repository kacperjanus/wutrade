import { useQueryClient } from "@tanstack/react-query";

function IntervalFilter({
    setPriceInterval,
    setTimeSeries,
    priceInterval,
    timeSeries,
}) {
    const queryClient = useQueryClient();

    function handleChangeInterval(e) {
        queryClient.removeQueries(["stockPrice"]);
        setPriceInterval(e.target.value);
    }

    function handleChangeSeries(e) {
        queryClient.removeQueries(["stockPrice"]);
        setTimeSeries(e.target.value);
    }

    return (
        <>
            <div>
                <label>Choose time series: </label>
                <select
                    onChange={handleChangeSeries}
                    value={timeSeries}
                    className="text-white bg-slate-900 outline-none"
                >
                    <option value="intra">intraday</option>
                    <option value="daily">daily</option>
                    <option value="weekly">weekly</option>
                    <option value="monthly">monthly</option>
                </select>
            </div>
            {timeSeries === "intra" ? (
                <div>
                    <label>Choose interval: </label>
                    <select
                        onChange={handleChangeInterval}
                        value={priceInterval}
                        className="text-white bg-slate-900 outline-none"
                    >
                        <option value="1min">1 minute</option>
                        <option value="5min">5 minutes</option>
                        <option value="15min">15 minutes</option>
                        <option value="30min">30 minutes</option>
                        <option value="60min">60 minutes</option>
                    </select>
                </div>
            ) : (
                ""
            )}
        </>
    );
}

export default IntervalFilter;
