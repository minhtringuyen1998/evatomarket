import { Container, Row, Col } from "react-bootstrap";
import TextUnderline from "../components/TextUnderline";
import "../assets/css/blogs.scss";
import { blogs } from "../data/dataBlogs";
import BlogItem from "../modules/BlogItem";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useEffect, useState } from "react";
import isMobile from "../hooks/useIsMobile";
import clsx from "clsx";
const Blogs = () => {
  const [currentIndex, setCurrentIndex] = useState(4);
  const [slideToShow, setSlideToShow] = useState(4);
  const [scrollPx, setScrollPx] = useState(0);
  const handleClickArrow = (actionBtn: string) => {
    const step = actionBtn == "next" ? 1 : -1;
    let pxToScroll = 320;
    switch (actionBtn) {
      case "next":
        setCurrentIndex((prev) => prev + 1);
        setScrollPx((prev) => (prev += pxToScroll));
        break;
      case "prev":
        setCurrentIndex((prev) => prev - 1);
        setScrollPx((prev) => (prev -= pxToScroll));
        break;
    }
  };

  useEffect(() => {
    if (isMobile()) {
      setSlideToShow(1);
      setCurrentIndex(1);
    }
  }, [isMobile()]);

  return (
    <Container as="section" className="container_blogs">
      <h2>
        Latest <TextUnderline>New &amp; Blogs</TextUnderline>
      </h2>
      <div className="wrapper_slider">
        <div
          className={clsx("slider")}
          style={{
            transform: `translate3d(-${scrollPx}px , 0 , 0)`,
          }}
        >
          {blogs.map((blog: any, index: number) => {
            return <BlogItem classes={""} {...blog} key={`${blog.imgUrl}`} />;
          })}
        </div>
      </div>

      <div className="btn_prev_next">
        <button
          disabled={currentIndex - slideToShow < 0}
          className="btn prev"
          onClick={() => handleClickArrow("prev")}
        >
          <AiOutlineArrowLeft />
        </button>
        <button
          disabled={currentIndex >= blogs.length}
          onClick={() => handleClickArrow("next")}
          className="btn next"
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </Container>
  );
};
export default Blogs;
