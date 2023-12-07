import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSignup } from "./useSignup";
import toast from "react-hot-toast";
import InputField from "../../ui/InputField";
import Button from "../../ui/Button";
import FullSpinner from "../../ui/FullSpinner";

function RegisterForm() {
    const navigate = useNavigate();
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
    return (
        <>
            {isSigningUp ? <FullSpinner /> : ""}
            <form
                className="flex flex-col w-[30rem] text-white gap-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <InputField
                    fieldName="firstName"
                    label="First Name"
                    registerFunction={register}
                />
                <InputField
                    fieldName="lastName"
                    label="Last Name"
                    registerFunction={register}
                />
                <InputField
                    fieldName="email"
                    label="Email"
                    registerFunction={register}
                />
                <InputField
                    fieldName="password"
                    label="Password"
                    type="password"
                    registerFunction={register}
                />
                <InputField
                    fieldName="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    registerFunction={register}
                />
                <Button type="primary">Register</Button>
            </form>
            <div className="text-white flex justify-center items-center">
                <h1>Already have an account?</h1>
                <Button type="secondary" onClick={() => navigate("/login")}>
                    Log in here
                </Button>
            </div>
            ;
        </>
    );
}

export default RegisterForm;
