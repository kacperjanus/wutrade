import MainNavLink from "./MainNavLink";

function MainNav() {
    return (
        <ul className="flex flex-col gap-10 items-center pt-10">
            <MainNavLink to="/dashboard">Dashboard</MainNavLink>
            <MainNavLink to="/portfolio">Portfolio</MainNavLink>
            <MainNavLink to="/watchlist">Watchlist</MainNavLink>
            <MainNavLink to="/leaderboards">Leaderboards</MainNavLink>
            <MainNavLink to="/account">Account</MainNavLink>
        </ul>
    );
}

export default MainNav;
