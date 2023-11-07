import { Link } from "react-router-dom";

function MainNav() {
    return (
        <ul className="flex flex-col gap-10 items-center pt-10">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/watchlist">Watchlist</Link>
            <Link to="/leaderboards">Leaderboards</Link>
            <Link to="/account">Account</Link>
        </ul>
    );
}

export default MainNav;
