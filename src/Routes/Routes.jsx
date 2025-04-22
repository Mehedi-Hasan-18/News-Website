import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path:'news',
    element:<h3>This is important News</h3>
  }
]);

export default router;
