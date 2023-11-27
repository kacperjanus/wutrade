import supabase from "./supabase";

export async function addTransaction({
    userId,
    stockId,
    quantity,
    pricePerShare,
}) {
    const { data, error } = await supabase
        .from("transactions")
        .insert([
            {
                userId,
                stockId,
                quantity,
                pricePerShare,
            },
        ])
        .select();

    if (error) throw new Error(error.message);

    return data;
}

export async function getTransactions({ userId }) {
    const { data, error } = await supabase
        .from("transactions")
        .select("*")
        .eq("userId", userId);

    if (error) throw new Error(error);

    return data;
}
