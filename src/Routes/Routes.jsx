import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout.jsx";
import CategotyNews from "../Pages/CategotyNews.jsx";
import AuthLayout from "../Layouts/AuthLayout.jsx";
import Login from "../Pages/Login.jsx";
import Register from "../Pages/Register.jsx";
import PrivateRouter from "../Provider/PrivateRouter.jsx";
import NewsCard from "../Components/NewsCard.jsx";
import ReadMore from "../Components/ReadMore.jsx";
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
        /* private Routing */
        element: <CategotyNews></CategotyNews>,
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/categories/${params.id}`),
      },
      {
        path:"/readmore",
        element:<PrivateRouter><ReadMore></ReadMore></PrivateRouter>
      }
    ],
  },
  {
    path: "news",
    element: <h3>This is important News</h3>,
  },
  {
    path:"auth",
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path:"/auth/login",
        element:<Login></Login>
      },
      {
        path:"/auth/register",
        element:<Register></Register>
      }
    ]
  }
]);

export default router;
