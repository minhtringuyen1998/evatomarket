import { Container, Row, Col } from "react-bootstrap";
import TextUnderline from "../components/TextUnderline";
import "../assets/css/blogs.scss";
import { blogs } from "../data/dataBlogs";
import BlogItem from "../modules/BlogItem";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useEffect, useState } from "react";
import clsx from "clsx";
const Blogs = () => {
  const [currentRangeIndex, setCurrentRangeIndex] = useState([0, 3]);
  const [sliderClassName, setSliderClassName] = useState(0);
  const handleClickArrow = (actionBtn: string) => {
    const offset = actionBtn == "next" ? 1 : 0;
    let currentPosition = sliderClassName;
    if (offset) {
      if (blogs[currentRangeIndex[1] + 1]) {
        setCurrentRangeIndex((prev) => [...prev].map((i) => i + 1));
        setSliderClassName(currentPosition + 320);
      }
    } else {
      if (blogs[currentRangeIndex[0] - 1]) {
        setCurrentRangeIndex((prev) => [...prev].map((i) => i - 1));
        setSliderClassName(currentPosition - 320);
      }
    }
  };
  useEffect(() => {
    console.log(sliderClassName);
  }, [sliderClassName]);
  return (
    <Container as="section" className="container_blogs">
      <h2>
        Latest <TextUnderline>New &amp; Blogs</TextUnderline>
      </h2>
      <div className="wrapper_slider">
        <div
          className={clsx("slider")}
          style={{
            transform: `translate3d(-${sliderClassName}px , 0 , 0)`,
          }}
        >
          {blogs.map((blog: any, index: number) => {
            return (
              <BlogItem
                rangeIndex={currentRangeIndex}
                i={index}
                classes={""}
                {...blog}
                key={`${blog.imgUrl}`}
              />
            );
          })}
        </div>
      </div>

      <div className="btn_prev_next">
        <button
          className="btn prev"
          onClick={() => handleClickArrow("prev")}
          disabled={!currentRangeIndex[0]}
        >
          <AiOutlineArrowLeft />
        </button>
        <button
          onClick={() => handleClickArrow("next")}
          className="btn next"
          disabled={currentRangeIndex[1] == blogs.length - 1}
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </Container>
  );
};
export default Blogs;
