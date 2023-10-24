import { Link } from "react-router-dom";

function Homepage() {
    return (
        <div>
            <h1 className="flex justify-center">WUTrade</h1>
            <h2 className="flex justify-center mb-10">
                Your Virtual Stock Market Application
            </h2>
            <Link
                className="flex justify-center bg-yellow-500 p-4"
                to="/register"
            >
                Register
            </Link>
            <Link className="flex justify-center bg-orange-500 p-4" to="/login">
                Log in
            </Link>
        </div>
    );
}

export default Homepage;
