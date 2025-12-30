import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error404 from "../Pages/Error$04/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error404></Error404>,
    children:[
        {

        }
    ]
  },
]);


export default router;