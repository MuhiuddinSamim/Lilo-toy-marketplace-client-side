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
        element:<ToyDetails></ToyDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/ToyDetails/${params.id}`)  
  }, {
     path:'/myblogs',
        element:<MyToys></MyToys>
  }

    ]
  }
]);

export default router;