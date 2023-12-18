import { useQueryClient } from "@tanstack/react-query";
import { useStockFundamentalData } from "../features/stocks/useStockDetails";
import { useStockPriceData } from "../features/stocks/useStockPriceData";
import { useWatchlist } from "../features/watchlist/useWatchlist";
import { useEffect, useState } from "react";
import Spinner from "../ui/Spinner";
import { usePortfolio } from "../features/portfolio/usePortfolio";
import { useParams } from "react-router-dom";
import { useTransactions } from "../features/transactions/useTransactions";
import NotFound from "./NotFound";
import CompanyOverview from "../features/stocks/CompanyOverview";
import PriceGraphContainer from "../features/stocks/PriceGraphContainer";
import CompanyFinancials from "../features/stocks/CompanyFinancials";
import CompanyDividend from "../features/stocks/CompanyDividend";
import CompanyHeader from "../features/stocks/CompanyHeader";

function StockDetails() {
    const queryClient = useQueryClient();
    const { stockId } = useParams();

    const [priceInterval, setPriceInterval] = useState("1min");
    const [timeSeries, setTimeSeries] = useState("intra");

    useEffect(() => {
        queryClient.removeQueries({ queryKey: ["stockDetails"] });
        queryClient.removeQueries({ queryKey: ["stockPrice"] });
    }, [queryClient]);

    const { data, isLoading } = useStockFundamentalData();
    const { data: watchlist, isLoading: isLoadingWatchlist } = useWatchlist();
    const { data: prices, isLoading: isLoadingPriceGraph } = useStockPriceData({
        interval: priceInterval,
        series: timeSeries,
        stockId,
    });

    const { isLoading: isLoadingTransactions } = useTransactions();
    const { portfolio } = usePortfolio();

    //TODO create select button for different intervals

    if (isLoading || isLoadingWatchlist || isLoadingTransactions)
        return <Spinner />;

    return Object.keys(data).length === 0 ? (
        <NotFound />
    ) : (
        <>
            <CompanyHeader
                data={data}
                watchlist={watchlist}
                portfolio={portfolio}
            />
            <div className="flex flex-col gap-5">
                <CompanyOverview data={data} />
                <PriceGraphContainer
                    priceInterval={priceInterval}
                    setPriceInterval={setPriceInterval}
                    timeSeries={timeSeries}
                    setTimeSeries={setTimeSeries}
                    prices={prices}
                    isLoadingPriceGraph={isLoadingPriceGraph}
                />
                <div className="flex flex-row gap-5">
                    <CompanyFinancials data={data} />
                    <CompanyDividend data={data} />
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
