import { useLocation } from "react-router-dom";
import MainNavLink from "./MainNavLink";
import {
    HiHome,
    HiOutlineHome,
    HiBriefcase,
    HiHeart,
    HiUserGroup,
    HiIdentification,
    HiSearch,
    HiOutlineSearch,
    HiOutlineBriefcase,
    HiOutlineHeart,
    HiOutlineUserGroup,
    HiOutlineIdentification,
    HiCurrencyDollar,
    HiOutlineCurrencyDollar,
} from "react-icons/hi";

function MainNav() {
    const { pathname } = useLocation();

    return (
        <ul className="flex text-slate-300 flex-col text-left pt-5">
            <li>
                <MainNavLink to="/dashboard">
                    {pathname === "/dashboard" ? <HiHome /> : <HiOutlineHome />}
                    <span>Dashboard</span>
                </MainNavLink>
            </li>
            <li>
                <MainNavLink to="/explore">
                    {pathname === "/explore" ? (
                        <HiSearch />
                    ) : (
                        <HiOutlineSearch />
                    )}
                    <span>Explore</span>
                </MainNavLink>
            </li>
            <li>
                <MainNavLink to="/portfolio">
                    {pathname === "/portfolio" ? (
                        <HiBriefcase />
                    ) : (
                        <HiOutlineBriefcase />
                    )}
                    <span>Portfolio</span>
                </MainNavLink>
            </li>
            <li>
                <MainNavLink to="/transactions">
                    {pathname === "/transactions" ? (
                        <HiCurrencyDollar />
                    ) : (
                        <HiOutlineCurrencyDollar />
                    )}
                    <span>Transactions</span>
                </MainNavLink>
            </li>
            <li>
                <MainNavLink to="/watchlist">
                    {pathname === "/watchlist" ? (
                        <HiHeart />
                    ) : (
                        <HiOutlineHeart />
                    )}
                    <span>Watchlist</span>
                </MainNavLink>
            </li>
            <li>
                <MainNavLink to="/leaderboards">
                    {pathname === "/leaderboards" ? (
                        <HiUserGroup />
                    ) : (
                        <HiOutlineUserGroup />
                    )}
                    <span>Leaderboards</span>
                </MainNavLink>
            </li>
            <li>
                <MainNavLink to="/account">
                    {pathname === "/account" ? (
                        <HiIdentification />
                    ) : (
                        <HiOutlineIdentification />
                    )}
                    <span>Account</span>
                </MainNavLink>
            </li>
        </ul>
    );
}

export default MainNav;
