import { createBrowserRouter } from "react-router-dom";
import Login from "../page/Login";
import Quiz from "../page/Quiz";
import MainPage from "../page/Main";

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
    path: "/",
    element: <MainPage />,
  },
]);

export default router;
