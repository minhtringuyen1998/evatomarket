import { IImageLazyLoad } from "../interfaces/components";
import "../assets/css/imagelazy.scss";
import { useEffect, useState } from "react";
const ImageLoading = (props: IImageLazyLoad) => {
  const { dataSrc } = props;
  return (
    <div className="container-img-lazy-load">
      <img data-src={dataSrc} className="lazy_img lazy" loading="lazy" />
      <div className="spinner"></div>
    </div>
  );
};
export default ImageLoading;
