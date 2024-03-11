import { createBrowserRouter } from "react-router-dom";
import Detail from "../components/pages/Detail";
import Home from "../components/pages/Home";
import App from "../App";
import Mypage from "../pages/users/Mypage";

const Router = createBrowserRouter(
  [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/:id",
        element: <Detail />,
      },
      {
        path: "/mypage",
        element: <Mypage />,
      },
    ],
  },
]);

export default Router;
