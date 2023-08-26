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
import Footer from "../layouts/Footer";
import { Helmet } from "react-helmet";
import { useState } from "react";
const HomePage = (props: any) => {
  const location = useLocation();
  const [showResponNav, setShowResponNav] = useState(false);
  const handleShowMenu = () => {
    setShowResponNav(true);
    let bodyEle = document.querySelector("body");
    bodyEle?.classList.add("disable_scroll");
  };
  const handleCloseMenu = () => {
    setShowResponNav(false);
    let bodyEle = document.querySelector("body");
    bodyEle?.classList.remove("disable_scroll");
  };
  return (
    <>
      <Helmet>
        <title>Supermarket</title>
      </Helmet>
      <Header handleShowMenuResponsive={handleShowMenu} />
      <NavMenu
        onCloseMenu={handleCloseMenu}
        showMenuResponsive={showResponNav}
      />
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
      <SectionSpacing />
      <Footer />
    </>
  );
};

export default HomePage;
