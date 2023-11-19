import { useEffect } from "react";
import { useTopMovers } from "../features/stocks/useTopMovers";
import { getTopMovers } from "../services/apiStockData";
import PageLayout from "../ui/PageLayout";
import SectionHeader from "../ui/SectionHeader";
import FullSpinner from "../ui/FullSpinner";

function Dashboard() {
    const { getTopMovers, isLoading: isGettingTopMovers } = useTopMovers();

    //useEffect(() => getTopMovers(), [getTopMovers]);

    return isGettingTopMovers ? (
        <FullSpinner />
    ) : (
        <PageLayout>
            <SectionHeader>Dashboard</SectionHeader>;
        </PageLayout>
    );
}

export default Dashboard;
