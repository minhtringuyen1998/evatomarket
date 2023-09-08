import styled from "styled-components";
import { useRef, useState } from "react";
import { Container } from "react-bootstrap";

const ImageZoom = (props: { imgUrl: string }) => {
  const [offset, setOffset] = useState({
    backgroundImage: `url(${props.imgUrl})`,
    backgroundPosition: "0% 0%",
  });
  const handleMouseMove = (e: any) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setOffset({
      backgroundPosition: `${x}% ${y}%`,
      backgroundImage: `url(${props.imgUrl})`,
    });
  };

  return (
    <figure onMouseMove={(e) => handleMouseMove(e)} style={offset}>
      <img src={props.imgUrl} />
    </figure>
  );
};
export default ImageZoom;
