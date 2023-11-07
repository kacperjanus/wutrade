import { Link } from "react-router-dom";

function MainNav() {
    return (
        <ul className="flex flex-col gap-10 items-center pt-10">
            <Link to="/dashboard">Dashboard</Link>
            <li>Portfolio</li>
            <li>Watchlist</li>
            <li>Leaderboards</li>
            <li>Education</li>
            <li>Account</li>
        </ul>
    );
}

export default MainNav;
