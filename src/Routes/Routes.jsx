import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout.jsx";
import CategotyNews from "../Pages/CategotyNews.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to={"category/01"}></Navigate>,
      },
      {
        path: "category/:id",
        element: <CategotyNews></CategotyNews>,
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/categories/${params.id}`)
      },
    ],
  },
  {
    path: "news",
    element: <h3>This is important News</h3>,
  },
]);

export default router;
