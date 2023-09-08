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
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetModalData } from "../reducer/modalSlice";
import { MODAL_NAME } from "../enum";
import ModalReviewProduct from "../modals/ModalReviewProduct";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { close } from "../reducer/modalSlice";
const HomePage = (props: any) => {
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
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
  const modalData = useSelector(useGetModalData);
  return (
    <HelmetProvider>
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
      {modalData.name == MODAL_NAME.MODAL_REVIEW_PRODUCT && (
        <ModalReviewProduct
          show={modalData.name == MODAL_NAME.MODAL_REVIEW_PRODUCT}
          onHide={() => {
            dispatch(close());
          }}
          productInfo={modalData.data}
        />
      )}
    </HelmetProvider>
  );
};

export default HomePage;
