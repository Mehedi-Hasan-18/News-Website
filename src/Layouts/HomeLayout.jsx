import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftNavBar from "../Components/LayoutComponent/LeftNavBar";
import RightNavBar from "../Components/LayoutComponent/RightNavBar";
import NavBar from "../Components/NavBar";

const HomeLayout = () => {
  return (
    <div className="min-h-screen bg-white text-black font-Poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-2">
        <NavBar></NavBar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-2">
        <aside className="left col-span-3"><LeftNavBar></LeftNavBar></aside>
        <section className="col-span-6"><Outlet></Outlet></section>
        <asidec className="col-span-3"><RightNavBar></RightNavBar></asidec>
      </main>
    </div>
  );
};

export default HomeLayout;
