import { createBrowserRouter } from "react-router-dom";
import Login from "../page/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <div>Home Page</div>,
  },
  {
    path: "/about",
    element: <div>About Page</div>,
  },
]);

export default router;
