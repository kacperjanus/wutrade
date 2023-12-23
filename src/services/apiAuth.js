import supabase from "./supabase";

export async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
}

export async function signInWithEmail({ email, password }) {
    //Authenticate user with Supabase
    const { data, error: signInError } = await supabase.auth.signInWithPassword(
        {
            email: email,
            password: password,
        }
    );

    //Pull user's metadata from user_metadata table
    const users_metadata = await getUserMetadata({ userId: data.user.id });

    //Check if login was successful
    if (signInError) throw new Error(signInError.message);

    //Return logged in user's data
    return { userData: data.user, userMetadata: users_metadata };
}

export async function getUserMetadata({ userId }) {
    const {
        data: [users_metadata],
        error,
    } = await supabase.from("user_metadata").select("*").eq("user_id", userId);

    if (error) throw new Error(error.message);
    return users_metadata;
}

export async function signUpWithEmail({
    firstName,
    lastName,
    email,
    password,
}) {
    //Sign up with Supabase
    const { data, error: signUpError } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: {
                firstName,
                lastName,
            },
        },
    });
    //Check if login was successful
    if (signUpError) throw new Error(signUpError.message);

    const {
        data: [users_metadata],
    } = await createUserMetadataRow({
        userId: data.user.id,
        firstName,
        lastName,
    });

    //Return registered user's data
    return { userData: data.user, userMetadata: users_metadata };
}

export async function getCurrentUser() {
    //Check if session is active
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) return null;

    //If the session is active get current user's data
    const { data, error: userError } = await supabase.auth.getUser();
    if (userError) throw new Error(userError.message);
    // console.log(data);

    const {
        data: [users_metadata],
        error,
    } = await supabase
        .from("user_metadata")
        .select("*")
        .eq("user_id", data.user.id);

    if (error) throw new Error(error.message);

    return { userData: data?.user, userMetadata: users_metadata };
}

export async function updateUsersBalance({ balance, userId }) {
    const { data, error } = await supabase
        .from("user_metadata")
        .update({ balance: balance })
        .eq("user_id", userId)
        .select();

    if (error) throw new Error(error.message);
    return data;
}

export async function resetAccount({ userId }) {
    const { error } = await supabase
        .from("watchlist")
        .delete()
        .eq("user_id", userId);

    if (error) throw new Error(error.message);

    const { error: errorTransactions } = await supabase
        .from("transactions")
        .delete()
        .eq("userId", userId);

    if (errorTransactions) throw new Error(error.message);

    const { error: errorPortfolioValue } = await supabase
        .from("portfolio_values")
        .delete()
        .eq("user_id", userId);

    if (errorPortfolioValue) throw new Error(error.message);
}

export async function updateCurrentUser({
    password,
    firstName,
    lastName,
    email,
}) {
    let updateData;
    if (password) updateData = { password };
    if (firstName) updateData = { data: { firstName } };
    if (lastName) updateData = { data: { lastName } };
    if (email) updateData = { email };
    const { data: updatedUser, error } = await supabase.auth.updateUser(
        updateData
    );

    if (error) throw new Error(error.message);
    return updatedUser;
}

export async function createUserMetadataRow({ userId, firstName, lastName }) {
    const { data, error } = await supabase
        .from("user_metadata")
        .insert([
            {
                user_id: userId,
                first_name: firstName,
                last_name: lastName,
            },
        ])
        .select();

    if (error) throw new Error(error.message);

    return { data };
}
