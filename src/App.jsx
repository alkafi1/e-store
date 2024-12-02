
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Product from './components/Product/Product';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import About from './components/About/About/About';
import ViewAccountPage from './components/AccountPage/ViewAccountPage/ViewAccountPage';
import ViewCart from './components/Cart/ViewCart/ViewCart';
import Login from './components/Login/Login';
import Shop from './components/Shop/Shop/Shop';
import './assets/assets/css/bootstrap.min.css';
import './assets/assets/css/slick.css';
import './assets/assets/css/LineIcons.css';
import './assets/assets/css/materialdesignicons.min.css';
import './assets/assets/css/jquery-ui.min.css';
import './assets/assets/css/nice-select.css';
import './assets/assets/css/default.css';
import './assets/assets/css/style.css';
import ViewCheckOut from './components/CheckOut/ViewCheckOut/ViewCheckOut';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/account",
        element: <ViewAccountPage></ViewAccountPage>
      },
      {
        path: "/cart",
        element: <ViewCart></ViewCart>
      },
      {
        path: "/shop",
        element: <Shop></Shop>
      },
      {
        path: "/checkout",
        element: <ViewCheckOut></ViewCheckOut>
      },
      {
        path: "/Login",
        element: <Login></Login>
      },
      {
        path: "/product",
        element: <Product></Product>
      }
    ]
  },
]);
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
