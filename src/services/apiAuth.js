import supabase from "./supabase";

export async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
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

export async function signUpWithEmail({ email, password }) {
    //Sign up with Supabase
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });

    //Check if login was successful
    if (error) throw new Error(error.message);

    //Return registered user's data
    return data;
}

export async function getCurrentUser() {
    //Check if session is active
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) return null;

    //If the session is active get current user's data
    const { data, error } = await supabase.auth.getUser();
    if (error) throw new Error(error.message);

    return data?.user;
}
