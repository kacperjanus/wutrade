import Logo from "./Logo";

function Sidebar() {
    return (
        <aside className="bg-yellow-500 py-[3.2rem] px-[2.4rem] border-r-1 flex flex-col gap-[3.2rem] row-[-1/1]">
            <Logo />
        </aside>
    );
}

export default Sidebar;
