import BuySellButtons from "../features/stocks/BuySellButtons";
import PriceGraph from "../features/stocks/PriceGraph";
import { useStockFundamentalData } from "../features/stocks/useStockDetails";
import { useStockPriceData } from "../features/stocks/useStockPriceData";
import AddToWatchlist from "../features/watchlist/AddToWatchlist";
import { useWatchlist } from "../features/watchlist/useWatchlist";
import ContentBox from "../ui/ContentBox";
import FullSpinner from "../ui/FullSpinner";
import SectionHeader from "../ui/SectionHeader";
import { formatCurrency } from "../utils/helpers";

function StockDetails() {
    const { data, isLoading } = useStockFundamentalData();
    const { data: watchlist, isLoading: isLoadingWatchlist } = useWatchlist();
    const { data: prices, isLoading: isLoadingPriceGraph } = useStockPriceData({
        interval: "5min",
    });

    //TODO create select button for different intervals
    //TODO add "You own ... shares of this company" ContentBox

    return isLoading || isLoadingWatchlist || isLoadingPriceGraph ? (
        <FullSpinner />
    ) : (
        <>
            <div className="flex flex-row ">
                <SectionHeader>
                    <span className="font-medium">{data.Name}</span> (
                    {data.Symbol})
                </SectionHeader>
                <AddToWatchlist watchlist={watchlist} />
                <BuySellButtons />
            </div>
            <div className="flex flex-col gap-5">
                <ContentBox>
                    <span className="font-bold">Overview</span>
                    <div className="flex flex-col">
                        <span className="mb-5">{data.Description}</span>
                        <span>Asset type: {data.AssetType}</span>
                        <span>Exchange: {data.Exchange}</span>
                        <span>Sector: {data.Sector}</span>
                    </div>
                </ContentBox>
                <ContentBox>
                    <PriceGraph prices={prices} />
                </ContentBox>
                <div className="flex flex-row gap-5">
                    <ContentBox>
                        <span className="font-bold">Financials</span>
                        <div className="flex flex-col text-slate-300">
                            <span>
                                Market capitalization:{" "}
                                {formatCurrency(data["MarketCapitalization"])}
                            </span>
                            <span>
                                52-week-high:{" "}
                                {formatCurrency(data["52WeekHigh"])}
                            </span>
                            <span>
                                52-week-low: {formatCurrency(data["52WeekLow"])}
                            </span>
                            <span>
                                Profit margin:{" "}
                                {(data["ProfitMargin"] * 100).toFixed(2)}%
                            </span>
                        </div>
                    </ContentBox>
                    <ContentBox>
                        <span className="font-bold">Dividend</span>
                        <div className="flex flex-col text-slate-300">
                            <span>
                                Next dividend date: {data["DividendDate"]}
                            </span>
                            <span>
                                Dividend per share:{" "}
                                {formatCurrency(data["DividendPerShare"])}
                            </span>
                            <span>
                                Dividend yield:{" "}
                                {(data["DividendYield"] * 100).toFixed(2)}%
                            </span>
                        </div>
                    </ContentBox>
                </div>
            </div>
        </>
    );
}

export default StockDetails;

// useFundamentalStockData DATA
// 50DayMovingAverage: "133.44"
// 52WeekHigh: "141.22"
// 52WeekLow: "84.86"
// 200DayMovingAverage: "119.14"
// Address: "1600 AMPHITHEATRE PARKWAY, MOUNTAIN VIEW, CA, US"
// AnalystTargetPrice: "151.71"
// AssetType: "Common Stock"
// Beta: "1.05"
// BookValue: "21.79"
// CIK: "1652044"
// Country: "USA"
// Currency: "USD"
// Description: "Alphabet Inc. is an American multinational conglomerate headquartered in Mountain View, California. It was created through a restructuring of Google on October 2, 2015, and became the parent company of Google and several former Google subsidiaries. The two co-founders of Google remained as controlling shareholders, board members, and employees at Alphabet. Alphabet is the world's fourth-largest technology company by revenue and one of the world's most valuable companies."
// DilutedEPSTTM: "5.22"
// DividendDate: "None"
// DividendPerShare: "0"
// DividendYield: "0"
// EBITDA: "96071000000"
// EPS: "5.22"
// EVToEBITDA: "12.16"
// EVToRevenue: "4.057"
// ExDividendDate: "None"
// Exchange: "NASDAQ"
// FiscalYearEnd: "December"
// ForwardPE: "17.79"
// GrossProfitTTM: "156633000000"
// Industry: "SERVICES-COMPUTER PROGRAMMING, DATA PROCESSING, ETC."
// LatestQuarter: "2023-09-30"
// MarketCapitalization: "1715101368000"
// Name: "Alphabet Inc Class A"
// OperatingMarginTTM: "0.28"
// PEGRatio: "1.34"
// PERatio: "26.1"
// PriceToBookRatio: "4.852"
// PriceToSalesRatioTTM: "4.173"
// ProfitMargin: "0.225"
// QuarterlyEarningsGrowthYOY: "0.46"
// QuarterlyRevenueGrowthYOY: "0.11"
// ReturnOnAssetsTTM: "0.135"
// ReturnOnEquityTTM: "0.253"
// RevenuePerShareTTM: "23.34"
// RevenueTTM: "297131999000"
// Sector: "TECHNOLOGY"
// SharesOutstanding: "5918000000"
// Symbol: "GOOGL"
// TrailingPE: "26.1"
