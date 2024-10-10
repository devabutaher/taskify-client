import Home from "../components/Home/Home";
import MainLayout from "../layouts/MainLayout";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

export default routes;
