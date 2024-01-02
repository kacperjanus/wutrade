import { aplhavantageKey } from "./alphavantage";

export async function getTopMovers() {
    const data = await fetch(
        `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&entitlement=delayed&apikey=${aplhavantageKey}`
    ).then((res) => res.json());

    //TODO handle fetch errors

    return data;
}

export async function getStockFundamentalData({ stockId }) {
    const data = await fetch(
        `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stockId}&apikey=${aplhavantageKey}`
    ).then((res) => res.json());

    return data;
}

export async function getStockIntradayPriceData({ stockId, interval }) {
    const data = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockId}&interval=${interval}&entitlement=delayed&apikey=${aplhavantageKey}`
    ).then((res) => res.json());

    return data;
}

export async function getStockDailyPriceData({ stockId }) {
    const data = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockId}&apikey=${aplhavantageKey}`
    ).then((res) => res.json());

    return data;
}

export async function getStockWeeklyPriceData({ stockId }) {
    const data = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${stockId}&apikey=${aplhavantageKey}`
    ).then((res) => res.json());

    return data;
}

export async function getStockMonthlyPriceData({ stockId }) {
    const data = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${stockId}&apikey=${aplhavantageKey}`
    ).then((res) => res.json());

    return data;
}

export async function getStockPrice({ stockId }) {
    const data = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockId}&entitlement=delayed&apikey=${aplhavantageKey}`
    ).then((res) => res.json());

    return data;
}

export async function getMultipleStockPrices({ stocks }) {
    const stockPrices = [];
    for (let stockId of stocks) {
        const data = await getStockPrice({ stockId });
        stockPrices.push(data);
    }

    return stockPrices;
}
