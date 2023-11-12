import { NavLink } from "react-router-dom";

function MainNavLink({ to, children }) {
    return (
        <NavLink
            className={({ isActive }) =>
                isActive ? "text-white" : "text-slate-300"
            }
            to={to}
        >
            {children}
        </NavLink>
    );
}

export default MainNavLink;
