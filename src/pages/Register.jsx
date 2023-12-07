import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../features/authentication/RegisterForm";

function Register() {
    const navigate = useNavigate();

    return (
        <>
            <div>
                <div
                    className="absolute mt-4 ml-4"
                    onClick={() => navigate("/")}
                >
                    <Button type="secondary">GO BACK</Button>
                </div>
                <div className="bg-[#282828] flex flex-col w-full h-screen items-center pt-20 gap-5">
                    <div className="text-white text-4xl">REGISTER</div>
                    <RegisterForm />
                </div>
            </div>
        </>
    );
}

export default Register;
