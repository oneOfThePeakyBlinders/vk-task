import { Route, Routes } from "react-router-dom";
import { homeRoutes } from "../../shared";
import React from "react";
//import HomeLayout from "../layouts/HomeLayout";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                {/* При больших количествах роутов */}
                {/* {Object.values(homeRoutes).map((route) => (
                    <Route path={route.path} element={route.element} />
                ))} */}
                {/*<Route path='/' element={<HomeLayout/>}>*/}
                    <Route
                        path={homeRoutes.first.path}
                        element={homeRoutes.first.element}
                    />
                    <Route
                        path={homeRoutes.second.path}
                        element={homeRoutes.second.element}
                    />
                {/*</Route>*/}
            </Routes>
        </>
    );
};
