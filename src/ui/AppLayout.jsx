import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useUser } from "../features/authentication/useUser";
import PageLayout from "./PageLayout";

function AppLayout() {
    const { user } = useUser();
    return (
        <div className="grid grid-cols-[26rem,_1fr] grid-rows-[auto,1fr] h-screen">
            <Header user={user} />
            <Sidebar />
            <main className="bg-black overflow-scroll pt-[2.4rem] px-[4.8rem] pb-[6.4rem]">
                <PageLayout>
                    <Outlet />
                </PageLayout>
            </main>
        </div>
    );
}

export default AppLayout;
