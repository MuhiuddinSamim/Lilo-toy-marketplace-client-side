import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Main from "../LayOut/Main";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:'/',
        element:<h2>hello</h2>
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