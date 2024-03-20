import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {AppRouter} from './app';
import {BrowserRouter} from "react-router-dom";


const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
