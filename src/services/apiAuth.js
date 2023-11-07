import supabase from "./supabase";

export async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    if (error) console.log(error);
}

export async function signInWithEmail({ email, password }) {
    //Authenticate user with Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    //Check if login was successful
    if (error) throw new Error(error.message);

    //Return logged in user's data
    return data;
}
