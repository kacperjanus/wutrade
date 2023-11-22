import supabase from "./supabase";

export async function addToWatchlist({ userId, stockId }) {
    const { data, error } = await supabase
        .from("watchlist")
        .insert([{ user_id: userId, stockId: stockId }])
        .select();

    if (error) throw new Error(error);

    return data;
}

export async function removeFromWatchlist({ userId, stockId }) {
    const { error } = await supabase
        .from("watchlist")
        .delete()
        .eq("stockId", stockId)
        .eq("user_id", userId);

    if (error) throw new Error(error);
}

export async function getWatchlist({ userId }) {
    const { data, error } = await supabase
        .from("watchlist")
        .select("*")
        .eq("user_id", userId);

    if (error) throw new Error(error);

    return data;
}
