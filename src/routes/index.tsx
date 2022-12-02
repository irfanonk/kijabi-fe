import { Navigate, useRoutes } from "react-router-dom";
import PageNotFound from "../pages/common/PageNotFound";
import UserDetail from "../pages/users/UserDetail";
import UserList from "../pages/users/UserList";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <UserList />,
    },
    {
      path: "/:id",
      element: <UserDetail />,
    },

    {
      path: "*",
      children: [
        { path: "404", element: <PageNotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
  return routes;
}
