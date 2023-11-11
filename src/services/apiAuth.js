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

export async function signUpWithEmail({
    firstName,
    lastName,
    email,
    password,
}) {
    //Sign up with Supabase
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
        {
            email: email,
            password: password,
        }
    );
    //Check if login was successful
    if (signUpError) throw new Error(signUpError.message);

    //Create user_data record
    const {
        data: [userData],
        error: userDataError,
    } = await supabase
        .from("user_data")
        .insert([
            { id: signUpData.user.id, firstName, lastName, balance: 200000 },
        ])
        .select();

    //Check if creating was successful
    if (userDataError) throw new Error(userDataError.message);

    console.log(userData);
    //Join data
    const data = {
        balance: userData.balance,
        firstName: userData.firstName,
        lastName: userData.lastName,
        ...signUpData.user,
    };

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
