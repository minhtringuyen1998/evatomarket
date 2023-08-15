import { Link, Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import { useEffect, useState } from "react";
import NavMenu from "../layouts/NavMenu";

const HomePage = (props: any) => {
  const [showMenu, setShowMenu] = useState(false);
  const lazyLoad = () => {
    const listImg = document.querySelectorAll("img.lazy_img");
    if (listImg.length) {
      listImg.forEach((img: any) => {
        if (img.src) {
          return;
        } else {
          setTimeout(() => {
            let scrollTop = window.pageYOffset;
            if (img.offsetTop < window.innerHeight - scrollTop) {
              img.classList.remove("lazy");
              img.src = img.dataset.src;
            }
          }, 500);
        }
      });
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", lazyLoad);
    window.addEventListener("load", lazyLoad);
    return () => {
      window.removeEventListener("scroll", lazyLoad);
      window.addEventListener("load", lazyLoad);
    };
  }, []);
  return (
    <>
      <Header />
      <NavMenu />
      <Outlet />
    </>
  );
};

export default HomePage;
