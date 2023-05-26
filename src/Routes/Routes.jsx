import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Main from "../LayOut/Main";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import Home from "../Components/Home/Home";
import AddToy from "../Components/ErrorPage/AddToy/AddToy";
import AllToys from "../Components/AllToys/AllToys";
import Blogs from "../Blogs";
import ToyDetails from "../Components/toy details/ToyDetails";
import MyToys from "../Shared/MyToys/MyToys";
import PrivateRoute from "../Shared/PrivateRoute/PrivateRoute";

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
      },
      {
        path:'/addToy',
        element:<AddToy></AddToy>
      },
      {
        path:'/allToys',
        element:<AllToys></AllToys>
    },
  {
     path:'/blogs',
        element:<Blogs></Blogs>
  }
  ,
   {
     path:'/ToyDetails/:id',
        element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://lilo-server-muhiuddinsamim.vercel.app/ToyDetails/${params.id}`)  
  }, 
  {
     path:'/myToys',
    element:<MyToys></MyToys>
  }

    ]
  }
]);

export default router;