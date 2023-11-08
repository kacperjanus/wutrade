import { useForm } from "react-hook-form";
import { useSignup } from "../features/authentication/useSignup";
import toast from "react-hot-toast";

function Register() {
    const { register, handleSubmit } = useForm();
    const { signUp, isLoading } = useSignup();

    function onSubmit({ email, password, confirmPassword }) {
        if (!email || !password || !confirmPassword) return;
        if (password !== confirmPassword) {
            toast.error("Passwords have to match");
            return;
        }
        signUp({ email, password });
    }

    return (
        <>
            <div>Register</div>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <input type="submit" />
            </form>
        </>
    );
}

export default Register;
