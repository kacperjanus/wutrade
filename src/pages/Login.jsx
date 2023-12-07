import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import LoginForm from "../features/authentication/LoginForm";

function Login() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="absolute mt-4 ml-4">
                <Button onClick={() => navigate("/")} type="secondary">
                    GO BACK
                </Button>
            </div>
            <div className="bg-[#282828] flex flex-col w-full h-screen items-center pt-20 gap-5">
                <div className="text-white text-4xl">LOG IN</div>
                <LoginForm />
            </div>
        </div>
    );
}

export default Login;
