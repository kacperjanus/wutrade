import { useForm } from "react-hook-form";
import { useSignup } from "../features/authentication/useSignup";
import toast from "react-hot-toast";
import PrimaryButton from "../ui/PrimaryButton";

function Register() {
    const { register, handleSubmit } = useForm();
    const { signUp, isLoading } = useSignup();

    function onSubmit({ email, password, confirmPassword, username }) {
        if (!email || !password || !confirmPassword || !username) return;
        if (password !== confirmPassword) {
            toast.error("Passwords have to match");
            return;
        }
        signUp({ email, password });
    }

    return (
        <>
            <div>Register</div>
            <form
                className="flex flex-col w-80"
                onSubmit={handleSubmit(onSubmit)}
            >
                <label>Username</label>
                <input
                    className="border-solid border-2"
                    {...register("username")}
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
