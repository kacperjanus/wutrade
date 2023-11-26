import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
    return (
        <aside className="bg-[#282828] py-[3.2rem] px-[2.4rem] border-r-1 flex flex-col row-[-1/1]">
            <Logo />
            <MainNav />
            <h1 className="text-white text-sm text-opacity-30 text-center mt-auto">
                Copyright © 2023 Kacper Janus. All rights reserved.
            </h1>
        </aside>
    );
}

export default Sidebar;
