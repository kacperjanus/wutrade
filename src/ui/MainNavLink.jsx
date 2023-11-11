import { NavLink } from "react-router-dom";

function MainNavLink({ to, children }) {
    return (
        <NavLink
            className={({ isActive }) =>
                (isActive ? "text-white" : "") + "bg-sky-100 px-10 m-0"
            }
            to={to}
        >
            {children}
        </NavLink>
    );
}

export default MainNavLink;
