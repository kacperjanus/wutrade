import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
    return (
        <div className="grid grid-cols-[26rem,_1fr] grid-rows-[auto,1fr] h-screen">
            <Header />
            <Sidebar />
            <main className="bg-green-500 overflow-scroll pt-[2.4rem] px-[4.8rem] pb-[6.4rem]">
                <div className="flex flex-col gap-[3.2rem] max-w-[120rem] my-0 mx-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

export default AppLayout;