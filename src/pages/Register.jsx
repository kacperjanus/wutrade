import RegisterForm from "../features/authentication/RegisterForm";
import GoBackButton from "../ui/GoBackButton";

function Register() {
    return (
        <>
            <GoBackButton />
            <div className="bg-[#282828] flex flex-col w-full h-screen items-center pt-20 gap-5">
                <div className="text-white text-4xl">REGISTER</div>
                <RegisterForm />
            </div>
        </>
    );
}

export default Register;
