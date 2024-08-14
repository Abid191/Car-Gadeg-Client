import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Layout/Main';
import Home from './Components/Pages/Home/Home/Home';
import Login from './Components/Pages/Home/Login/Login';
import Register from './Components/Pages/Home/Register/Register';
import AuthProvider from './Components/Provider/AuthProvider';
import CheckOut from './Components/Pages/CheckOut/CheckOut';
import Booking from './Components/Pages/Booking/Booking';
import PrivateRoute from './Components/Pages/Routes/PrivateRoute';
import About from './Components/Pages/Home/About/About';
import Services from './Components/Pages/Home/Services/Services';
import Blog from './Components/Pages/Home/Blog/Blog';
import Contact from './Components/Pages/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services",
        element: <PrivateRoute><Services></Services></PrivateRoute>
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/checkOut/:id",
        element: <CheckOut></CheckOut> ,
        loader:({params})=> fetch(`Service.json/${params.id}`)
      },
      {
        path: "/booking",
        element: <PrivateRoute><Booking></Booking></PrivateRoute>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </StrictMode>
  </div>

)
