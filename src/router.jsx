import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout/DefaultLayout"
import Error from "./views/Error/Error";
import Home from "./components/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            }
        ]
    },
    {
        path: "/error",
        element: <Error/>
    },
    {
        path: "*",
        element: <Error/>
    }
])

export default router