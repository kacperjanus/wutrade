import { useQueryClient } from "@tanstack/react-query";

function IntervalFilter(setPriceInterval) {
    const queryClient = useQueryClient();

    function handleChange(e) {
        queryClient.removeQueries(["stockPrice"]);
        setPriceInterval.setPriceInterval(e.target.value);
    }

    return (
        <>
            <label>Choose interval: </label>
            <select
                onChange={handleChange}
                value={setPriceInterval.priceInterval}
                className="text-black"
                defaultValue={"60min"}
            >
                <option value="1min">1 minute</option>
                <option value="5min">5 minutes</option>
                <option value="15min">15 minutes</option>
                <option value="30min">30 minutes</option>
                <option value="60min">60 minutes</option>
            </select>
        </>
    );
}

export default IntervalFilter;
