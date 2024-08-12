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
        path: "/register",
        element: <Register></Register>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </div>

)
