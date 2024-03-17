import React from "react";
// import {AppRouter} from "./app";
// import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomeLayout from "./app/layouts/HomeLayout";
// import { homeRoutes } from "./shared";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            {/*<BrowserRouter>*/}
            {/*        <Link to={homeRoutes.first.path}>1 часть</Link>*/}
            {/*        <Link to={homeRoutes.second.path}>2 часть</Link>*/}
            {/*    <AppRouter />*/}
            {/*</BrowserRouter>*/}
            <HomeLayout/>
        </QueryClientProvider>
    );
}

export default App;
