import { Link } from "react-router-dom";
import Logo from "../ui/Logo";

function Homepage() {
    return (
        <div className="flex flex-row">
            <div className="bg-black flex flex-col h-screen w-full text-white justify-center items-center">
                <Logo />
            </div>
            <div className="bg-[#282828] h-screen w-full flex flex-col justify-center items-center">
                <Link
                    className="flex justify-center bg-sky-400 text-white hover:bg-sky-600 hover:opacity-100 py-4 px-20 mx-16 rounded-full transition duration-500 ease-in-out"
                    to="/register"
                >
                    Start investing
                </Link>
            </div>
        </div>
    );
}

export default Homepage;
