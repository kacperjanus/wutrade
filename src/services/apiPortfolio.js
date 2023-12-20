import supabase from "./supabase";

export async function getPortfolioValues() {
    let { data: portfolio_values, error } = await supabase
        .from("portfolio_values")
        .select("created_at, portfolio_value, user_id");

    if (error) throw new Error(error.message);

    return portfolio_values;
}
