import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MobilePhones from "./pages/MobilePhones";
import Cart from "./pages/Cart";
import Dashboard from "./pages/admin/Dashboard";
import AddMobile from "./pages/admin/AddMobile";
import MobileDetails from "./pages/MobileDetails";

const router = createBrowserRouter([
  { path: "/", element: <Home/> },
  { path: "/login", element: <Login/> },
  { path: "/signup", element: <Signup/> },
  { path: "/mobile_phones/:category", element: <MobilePhones/> },
  { path: "/cart", element: <Cart/> },
  { path: "/dashboard", element: <Dashboard/> },
  { path: "/add_new_mobile", element: <AddMobile/> },
  { path: "/mobile_details/:phoneName", element: <MobileDetails/> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
