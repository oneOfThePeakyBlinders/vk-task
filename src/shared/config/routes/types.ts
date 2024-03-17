import { ReactNode } from "react";

type RouteType = { path: string; element: ReactNode };

export type HomeRoutesType = {
    first: RouteType;
    second: RouteType;
};
