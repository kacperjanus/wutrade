import { useForm } from "react-hook-form";
import { useSignup } from "../features/authentication/useSignup";
import toast from "react-hot-toast";
import PrimaryButton from "../ui/PrimaryButton";
import Spinner from "../ui/Spinner";
import { useNavigate } from "react-router-dom";

function Register() {
    const { register, handleSubmit } = useForm();
    const { signUp, isLoading: isSigningUp } = useSignup();
    const navigate = useNavigate();

    function onSubmit({
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
    }) {
        //Check if all the fields have been filled out
        if (
            !email ||
            !password ||
            !confirmPassword ||
            !firstName ||
            !lastName
        ) {
            toast.error("Fill out all fields");
            return;
        }
        //Check if both passwords are the same
        if (password !== confirmPassword) {
            toast.error("Passwords have to match");
            return;
        }
        signUp({ firstName, lastName, email, password });
    }

    const inputStyle =
        "bg-slate-600 focus:outline-0 bg-opacity-50 rounded-full px-4 py-2 focus:shadow-lg focus:shadow-sky-300/20";

    return (
        <>
            {isSigningUp ? <Spinner /> : ""}
            <div>
                <div
                    className="absolute mt-4 ml-4"
                    onClick={() => navigate("/")}
                >
                    <PrimaryButton>GO BACK</PrimaryButton>
                </div>
                <div className="bg-[#282828] flex flex-col w-full h-screen items-center pt-20 gap-5">
                    <div className="text-white text-4xl">REGISTER</div>
                    <form
                        className="flex flex-col w-[30rem] text-white gap-4"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="flex flex-col">
                            <label className="ml-2 text-xl">First name</label>
                            <input
                                className={inputStyle}
                                {...register("firstName")}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="ml-2 text-xl">Last name</label>
                            <input
                                className={inputStyle}
                                {...register("lastName")}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="ml-2 text-xl">Email</label>
                            <input
                                className={inputStyle}
                                {...register("email")}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="ml-2 text-xl">Password</label>
                            <input
                                className={inputStyle}
                                type="password"
                                {...register("password")}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="ml-2 text-xl">
                                Confirm password
                            </label>
                            <input
                                className={inputStyle}
                                type="password"
                                {...register("confirmPassword")}
                            />
                        </div>
                        <PrimaryButton type="submit">Register</PrimaryButton>
                    </form>
                    <div className="text-white flex justify-center items-center">
                        <h1>Already have an account?</h1>
                        <PrimaryButton onClick={() => navigate("/login")}>
                            Log in here
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
