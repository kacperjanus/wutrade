import { aplhavantageKey } from "./alphavantage";

export async function getTopMovers() {
    const data = await fetch(
        `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${aplhavantageKey}`
    ).then((res) => res.json());

    //TODO handle fetch errors

    return data;
}
