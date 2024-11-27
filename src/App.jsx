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
