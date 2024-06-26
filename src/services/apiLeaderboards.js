import supabase from "./supabase";

export async function getAllPortfolioValues() {
    const { data: portfolio_values } = await supabase
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

export async function postPortfolioValues(valuesToPost) {
    if (valuesToPost?.length === 0 || !valuesToPost || !valuesToPost[0]["portfolio_value"]) throw new Error("Unable to post portfolio values");
    const { error } = await supabase
        .from("portfolio_values")
        .insert(valuesToPost)
        .select();
    if (error) throw new Error(error.message);
}

export async function calculateAllPortfolios() {}
