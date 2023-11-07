import { useForm } from "react-hook-form";
import { useLogin } from "../features/authentication/useLogin";

function Login() {
    const { register, handleSubmit } = useForm();
    const { login, isLoading } = useLogin();

    function onSubmit({ email, password }) {
        //Check if both inputs are filled out
        if (!email || !password) return;
        login({ email, password });
    }

    return (
        <>
            //TODO if isLoading === true add spinner
            <div>Log in</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input
                    className="border-solid border-2"
                    {...register("email")}
                />
                <label>Password</label>
                <input
                    className="border-solid border-2"
                    type="password"
                    {...register("password")}
                />
                <input type="submit" />
            </form>
        </>
    );
}

export default Login;
