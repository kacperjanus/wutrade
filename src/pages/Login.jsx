import { useForm } from "react-hook-form";
import { useLogin } from "../features/authentication/useLogin";
import PrimaryButton from "../ui/PrimaryButton";
import Spinner from "../ui/Spinner";

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
            {isLoading ? <Spinner /> : ""}
            <div>Log in</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input
                    className="border-solid border-2"
                    defaultValue={"kacperjanus8@gmail.com"}
                    {...register("email")}
                />
                <label>Password</label>
                <input
                    className="border-solid border-2"
                    type="password"
                    defaultValue={"kacper"}
                    {...register("password")}
                />
                <PrimaryButton type="submit">Log in</PrimaryButton>
            </form>
        </>
    );
}

export default Login;
