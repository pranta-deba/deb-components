import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Components from "../pages/Components/Components";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: "Error Page",
        children: [
            { path: "/", element: <Home /> },
            { path: "/components", element: <Components /> },
            { path: "/templates", element: "templates" },
            { path: "/documentation", element: "Documentation" },
        ],
    },
]);