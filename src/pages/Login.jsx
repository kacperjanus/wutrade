import LoginForm from "../features/authentication/LoginForm";
import GoBackButton from "../ui/GoBackButton";

function Login() {
    return (
        <>
            <GoBackButton />
            <div className="bg-[#282828] flex flex-col w-full h-screen items-center pt-20 gap-5">
                <div className="text-white text-4xl">LOG IN</div>
                <LoginForm />
            </div>
        </>
    );
}

export default Login;
