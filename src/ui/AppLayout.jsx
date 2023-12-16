import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useUser } from "../features/authentication/useUser";
import PageLayout from "./PageLayout";
import { useTransactions } from "../features/transactions/useTransactions";
import Spinner from "./Spinner";
import { useAllTransactions } from "../features/transactions/useAllTransactions";

function AppLayout() {
    const { user } = useUser();
    //TODO try to find better solution for loading transactions first
    const { isLoading } = useTransactions();
    const { isLoading: isLoadingAllTransactions } = useAllTransactions();
    return (
        <div className="grid grid-cols-[26rem,_1fr] grid-rows-[auto,1fr] h-screen">
            <Header user={user} />
            <Sidebar />
            <main className="bg-black overflow-scroll pt-[2.4rem] px-[4.8rem] pb-[6.4rem]">
                <PageLayout>
                    {isLoading || isLoadingAllTransactions ? (
                        <Spinner />
                    ) : (
                        <Outlet />
                    )}
                </PageLayout>
            </main>
        </div>
    );
}

export default AppLayout;
