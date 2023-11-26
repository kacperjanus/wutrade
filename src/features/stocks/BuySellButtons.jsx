function BuySellButtons() {
    const handleBuy = function () {};

    const handleSell = function () {};

    //TODO make button disabled based on the fact if the market is open
    return (
        <div className="text-white ml-auto mr-2 flex flex-row gap-2">
            <button
                onClick={handleBuy}
                className="bg-green-500 bg-opacity-60 rounded-lg py-1 px-4"
            >
                Buy
            </button>
            <button
                onClick={handleSell}
                className="bg-red-500 bg-opacity-60 rounded-lg py-1 px-4"
            >
                Sell
            </button>
        </div>
    );
}

export default BuySellButtons;
