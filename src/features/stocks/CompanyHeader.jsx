import SectionHeader from "../../ui/SectionHeader";
import AddToWatchlist from "../watchlist/AddToWatchlist";
import BuySellButtons from "./BuySellButtons";

function CompanyHeader({ data, watchlist, portfolio }) {
    return (
        <div>
            <div className="flex flex-row ">
                <SectionHeader>
                    <span className="font-medium">{data.Name}</span> (
                    {data.Symbol})
                </SectionHeader>
                <AddToWatchlist watchlist={watchlist} />
                <BuySellButtons company={data.Symbol} />
            </div>
            <div>
                {portfolio?.find((item) => item.company === data.Symbol) ? (
                    <span className="text-white">
                        You own{" "}
                        {
                            portfolio?.find(
                                (item) => item.company === data.Symbol
                            ).noShares
                        }{" "}
                        shares
                    </span>
                ) : (
                    <span className="text-white">You don't own any shares</span>
                )}
            </div>
        </div>
    );
}

export default CompanyHeader;
