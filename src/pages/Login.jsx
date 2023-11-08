import { useForm } from "react-hook-form";
import { useLogin } from "../features/authentication/useLogin";

function Login() {
    const { register, handleSubmit, reset } = useForm();
    const { login, isLoading } = useLogin();

    function onSubmit({ email, password }) {
        //Check if both inputs are filled out
        if (!email || !password) return;
        login({ email, password }, { onSettled: () => reset() });
        //TODO if isLoading === true add spinner
    }

    return (
        <>
            <div>Log in</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input
                    className="border-solid border-2"
                    defaultValue={"kacper@gmail.com"}
                    {...register("email")}
                />
                <label>Password</label>
                <input
                    className="border-solid border-2"
                    type="password"
                    defaultValue={"kacper"}
                    {...register("password")}
                />
                <input type="submit" />
            </form>
        </>
    );
}

export default Login;
