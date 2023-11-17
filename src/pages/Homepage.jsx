import { Link } from "react-router-dom";

function Homepage() {
    return (
        <div className="flex flex-row">
            <div className="bg-black flex flex-col h-screen w-full text-white justify-center items-center ">
                <h2 className="text-3xl">WUTrade</h2>
                <h2 className="text-white">
                    Your Virtual Stock Market Application
                </h2>
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
