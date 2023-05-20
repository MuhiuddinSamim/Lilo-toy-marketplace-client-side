import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Main from "../LayOut/Main";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import Home from "../Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
       {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      }

    ]
  },
]);

export default router;