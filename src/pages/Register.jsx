import { useForm } from "react-hook-form";
import { useSignup } from "../features/authentication/useSignup";
import toast from "react-hot-toast";
import PrimaryButton from "../ui/PrimaryButton";
import Spinner from "../ui/Spinner";

function Register() {
    const { register, handleSubmit } = useForm();
    const { signUp, isLoading: isSigningUp } = useSignup();

    function onSubmit({
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
    }) {
        //Check if all the fields have been filled out
        if (!email || !password || !confirmPassword || !firstName || !lastName)
            return;
        //Check if both passwords are the same
        if (password !== confirmPassword) {
            toast.error("Passwords have to match");
            return;
        }
        signUp({ firstName, lastName, email, password });
    }

    return (
        <>
            {isSigningUp ? <Spinner /> : ""}
            <div>Register</div>
            <form
                className="flex flex-col w-80"
                onSubmit={handleSubmit(onSubmit)}
            >
                <label>First name</label>
                <input
                    className="border-solid border-2"
                    {...register("firstName")}
                    required
                />
                <label>Last name</label>
                <input
                    className="border-solid border-2"
                    {...register("lastName")}
                    required
                />
                <label>Email</label>
                <input
                    className="border-solid border-2"
                    {...register("email")}
                    required
                />
                <label>Password</label>
                <input
                    className="border-solid border-2"
                    type="password"
                    {...register("password")}
                    required
                />
                <label>Confirm password</label>
                <input
                    className="border-solid border-2"
                    type="password"
                    {...register("confirmPassword")}
                    required
                />
                <PrimaryButton type="submit">Register</PrimaryButton>
            </form>
        </>
    );
}

export default Register;
