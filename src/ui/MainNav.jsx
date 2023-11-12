import MainNavLink from "./MainNavLink";
import {
    HiHome,
    HiBriefcase,
    HiHeart,
    HiUserGroup,
    HiIdentification,
} from "react-icons/hi";

function MainNav() {
    return (
        <ul className="flex text-slate-300 flex-col text-left pt-10">
            <li>
                <MainNavLink to="/dashboard">
                    <HiHome />
                    <span>Dashboard</span>
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
