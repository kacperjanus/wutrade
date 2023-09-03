import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <BrowserRouter>
                <Routes>
                    <Route path="homepage" element="" />
                    <Route path="*" element="" />
                </Routes>
            </BrowserRouter>
            <div className="text-3xl">Hello React</div>;
        </QueryClientProvider>
    );
}

export default App;
