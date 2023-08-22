import { Outlet, useLocation } from "react-router-dom";
import Header from "../layouts/Header";
import NavMenu from "../layouts/NavMenu";
import BannerHomePage from "../layouts/BannerHome";
import "../assets/css/homepage.scss";
import Services from "../layouts/Services";
import AdvertisementHome from "../layouts/Advertisement";
import SectionSpacing from "../layouts/SectionSpacing";
import CategoriesHome from "../layouts/CategoriesHome";
import ProductListHome from "../layouts/ProductListHome";
import AdvertisementMobileApp from "../layouts/AdvertisementMobileApp";
import Blogs from "../layouts/Blogs";
const HomePage = (props: any) => {
  const location = useLocation();

  return (
    <>
      <Header />
      <NavMenu />
      <section className="container_homepage">
        {location.pathname === "/" ? (
          <>
            <BannerHomePage />
            <Services />
            <AdvertisementHome />
            <SectionSpacing />
            <CategoriesHome />
            <SectionSpacing />
            <ProductListHome />
            <SectionSpacing />
            <AdvertisementMobileApp />
            <SectionSpacing />
            <Blogs />
          </>
        ) : (
          <Outlet />
        )}
      </section>
    </>
  );
};

export default HomePage;
