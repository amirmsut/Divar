import Router from "router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import defaultOptions from "./configs/reactQuery";

function App() {
    //
    const queryClient = new QueryClient({ defaultOptions: defaultOptions });

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}

export default App;
