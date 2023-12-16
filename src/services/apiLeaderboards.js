import supabase from "./supabase";

export async function getAllPortfolioValues() {
    const { data: portfolio_values, error } = await supabase
        .from("portfolio_values")
        .select("*");

    return portfolio_values;
}

export async function calculateAllPortfolios() {}
