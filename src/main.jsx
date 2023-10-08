import React from 'react'
import ReactDOM from 'react-dom/client'

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

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
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
  </React.StrictMode>,
)
