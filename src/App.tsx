import {AppRouter} from "./app";
import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { homeRoutes } from "./shared";
import React from "react";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Link to={homeRoutes.first.path}>1 часть</Link>
                <Link to={homeRoutes.second.path}>2 часть</Link>
                <AppRouter />
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
