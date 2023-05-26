import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Main from './components/Layout/Main.jsx';
import OrderReview from './components/OrderReview/OrderReview.jsx';
import Cart from './components/Cart/Cart.jsx';
import Granpa from './components/Grandpa/Granpa.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader: () => fetch('tshirtdata.json'),
      },
      {
        path:'orderReview',
        element: <OrderReview></OrderReview>
      },
      {
        path: 'cart',
        element: <Cart></Cart>
      }, 
      {
        path: 'grandpa',
        element: <Granpa></Granpa>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
