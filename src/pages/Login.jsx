import { useForm } from "react-hook-form";
import { useLogin } from "../features/authentication/useLogin";
import PrimaryButton from "../ui/PrimaryButton";
import Spinner from "../ui/Spinner";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
    const { register, handleSubmit, reset } = useForm();
    const { login, isLoading } = useLogin();
    const navigate = useNavigate();

    function onSubmit({ email, password }) {
        //Check if both inputs are filled out
        if (!email || !password) {
            toast.error("Fill out all the fields");
            return;
        }
        login({ email, password }, { onSettled: () => reset() });
        //TODO if isLoading === true add spinner
    }

    const inputStyle =
        "bg-slate-600 focus:outline-0 bg-opacity-50 rounded-full px-4 py-2 focus:shadow-lg focus:shadow-sky-300/20";

    return (
        <>
            {isLoading ? <Spinner /> : ""}
            <div>
                <div
                    className="absolute mt-4 ml-4"
                    onClick={() => navigate("/")}
                >
                    <PrimaryButton>GO BACK</PrimaryButton>
                </div>
                <div className="bg-[#282828] flex flex-col w-full h-screen items-center pt-20 gap-5">
                    <div className="text-white text-4xl">LOG IN</div>
                    <form
                        className="flex flex-col w-[30rem] text-white gap-4"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="flex flex-col">
                            <label>Email</label>
                            <input
                                className={inputStyle}
                                defaultValue={"kacperjanus8@gmail.com"}
                                {...register("email")}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label>Password</label>
                            <input
                                className={inputStyle}
                                type="password"
                                defaultValue={"kacper"}
                                {...register("password")}
                            />
                        </div>
                        <PrimaryButton type="submit">Log in</PrimaryButton>
                    </form>
                    <div className="text-white flex justify-center items-center">
                        <h1>Don't have an account yet?</h1>
                        <PrimaryButton onClick={() => navigate("/register")}>
                            Register here
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
