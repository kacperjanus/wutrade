import toast from "react-hot-toast";
import Button from "../../ui/Button";
import InputField from "../../ui/InputField";
import { useNavigate } from "react-router-dom";
import { useLogin } from "./useLogin";
import { useForm } from "react-hook-form";
import FullSpinner from "../../ui/FullSpinner";

function LoginForm() {
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
    }

    return (
        <>
            {isLoading ? <FullSpinner /> : ""}
            <form
                className="flex flex-col w-[30rem] text-white gap-4"
                onSubmit={handleSubmit(onSubmit)}
            >
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
                <Button type="primary">Log in</Button>
            </form>
            <div className="text-white flex justify-center items-center">
                <h1>Don't have an account yet?</h1>
                <Button type="secondary" onClick={() => navigate("/register")}>
                    Register here
                </Button>
            </div>
        </>
    );
}

export default LoginForm;
