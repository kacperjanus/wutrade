import { NavLink } from "react-router-dom";

function MainNavLink({ to, children }) {
    return (
        <NavLink
            className={({ isActive }) =>
                [
                    "rounded-lg px-10 py-2 my-2",
                    " text-2xl",
                    "hover:bg-sky-400 hover:bg-opacity-20",
                    "flex gap-3 items-center",
                    isActive ? "text-sky-600 bg-sky-600 bg-opacity-20" : "",
                ].join(" ")
            }
            to={to}
        >
            {children}
        </NavLink>
    );
}

export default MainNavLink;
