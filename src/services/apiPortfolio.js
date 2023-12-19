import supabase from "./supabase";

export async function getPortfolioValues({ userId }) {
    let { data: portfolio_values, error } = await supabase
        .from("portfolio_values")
        .select("created_at, portfolio_value")
        .eq("user_id", userId);

    if (error) throw new Error(error.message);

    return portfolio_values;
}
