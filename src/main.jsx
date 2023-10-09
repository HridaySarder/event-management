import React from 'react'
import ReactDOM from 'react-dom/client'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './layouts/Root';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Home/Home';
import AuthProvider from './providers/AuthProvider';
import Events from './Home/Events/Events';
import PrivateRoute from './Routes/PrivateRoute';
import About from './Pages/About';
import Event from './Home/Events/Event/Event';
import Error from './Pages/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:() => fetch('/event.json')
      },
      {
        path:"/events/:id",
        element:<PrivateRoute><Events></Events></PrivateRoute>,
        // loader:() => fetch('/event.json')
      },
      {
        path:"/about",
        element:<PrivateRoute><About></About></PrivateRoute>
      },
      {
        path:"/event",
        element:<PrivateRoute><Event></Event></PrivateRoute>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
     <ToastContainer />
  </React.StrictMode>,
)
