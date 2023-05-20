import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProviders from './Provider/AuthProviders';


ReactDOM.createRoot(document.getElementById("root")).render(

  <AuthProviders>
        <React.StrictMode>
            <RouterProvider router={router} />
         </React.StrictMode>
  </AuthProviders>

);
