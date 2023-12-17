import supabase from "./supabase";

export async function getAllPortfolioValues() {
    const { data: portfolio_values, error } = await supabase
        .from("portfolio_values")
        .select("*");

    return portfolio_values;
}

export async function getAllUserData() {
    const { data: users_metadata, error } = await supabase
        .from("user_metadata")
        .select("*");

    if (error) throw new Error(error.message);

    return users_metadata;
}

export async function calculateAllPortfolios() {}
