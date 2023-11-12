import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
    return (
        <aside className="bg-[#282828] py-[3.2rem] px-[2.4rem] border-r-1 flex flex-col gap-[3.2rem] row-[-1/1]">
            <Logo />
            <MainNav />
        </aside>
    );
}

export default Sidebar;
