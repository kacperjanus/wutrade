import MainNavLink from "./MainNavLink";
import {
    HiHome,
    HiBriefcase,
    HiHeart,
    HiUserGroup,
    HiIdentification,
    HiSearch,
} from "react-icons/hi";

function MainNav() {
    return (
        <ul className="flex text-slate-300 flex-col text-left pt-5">
            <li>
                <MainNavLink to="/dashboard">
                    <HiHome />
                    <span>Dashboard</span>
                </MainNavLink>
            </li>
            <li>
                <MainNavLink to="/explore">
                    <HiSearch />
                    <span>Explore</span>
                </MainNavLink>
            </li>
            <li>
                <MainNavLink to="/portfolio">
                    <HiBriefcase />
                    <span>Portfolio</span>
                </MainNavLink>
            </li>
            <li>
                <MainNavLink to="/watchlist">
                    <HiHeart />
                    <span>Watchlist</span>
                </MainNavLink>
            </li>
            <li>
                <MainNavLink to="/leaderboards">
                    <HiUserGroup />
                    <span>Leaderboards</span>
                </MainNavLink>
            </li>
            <li>
                <MainNavLink to="/account">
                    <HiIdentification />
                    <span>Account</span>
                </MainNavLink>
            </li>
        </ul>
    );
}

export default MainNav;
