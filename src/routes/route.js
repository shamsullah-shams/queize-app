import { createBrowserRouter } from "react-router-dom";
import Login from "../page/Login";
import Quiz from "../page/Quiz";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/about",
    element: <div>About Page</div>,
  },
]);

export default router;
