import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Portfolio from "./pages/Portfolio";
import Watchlist from "./pages/Watchlist";
import Leaderboards from "./pages/Leaderboards";
import Account from "./pages/Account";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./ui/ProtectedRoute";
import Explore from "./pages/Explore";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 2000,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Toaster />
            <ReactQueryDevtools initialIsOpen={false} />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Homepage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        element={
                            <ProtectedRoute>
                                <AppLayout />
                            </ProtectedRoute>
                        }
                    >
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/watchlist" element={<Watchlist />} />
                        <Route
                            path="/leaderboards"
                            element={<Leaderboards />}
                        />
                        <Route path="/account" element={<Account />} />
                        <Route path="/explore" element={<Explore />} />
                        <Route path="*" element="" />
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
