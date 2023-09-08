import { IImageLazyLoad } from "../interfaces/components";
import "../assets/css/imagelazy.scss";
import { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";
import clsx from "clsx";
import Spinner from "./Spinner";
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
      <Spinner />
    </div>
  );
};
export default ImageLoading;
