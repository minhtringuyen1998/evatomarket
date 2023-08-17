import { IImageLazyLoad } from "../interfaces/components";
import "../assets/css/imagelazy.scss";
import { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";
import clsx from "clsx";
const ImageLoading = (props: IImageLazyLoad) => {
  const { dataSrc } = props;
  const ref = useRef(null);
  useOnScreen(ref);
  return (
    <div ref={ref} className="container-img-lazy-load">
      <img
        data-src={dataSrc}
        className="lazy_img  lazy"
        loading="lazy"
        key={`${dataSrc}`}
      />
      <div className="spinner"></div>
    </div>
  );
};
export default ImageLoading;
