import {FirstPart,SecondPart} from "../../../pages";
import { HomeRoutesType } from "./types";

export const homeRoutes: HomeRoutesType = {
    first: { path: "/1", element: <FirstPart /> },
    second: { path: "/2", element: <SecondPart /> },
};
