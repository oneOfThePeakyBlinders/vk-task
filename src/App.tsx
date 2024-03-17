import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomeLayout from "./app/layouts/HomeLayout";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <HomeLayout/>
        </QueryClientProvider>
    );
}

export default App;
