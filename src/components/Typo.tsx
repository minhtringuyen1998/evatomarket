import "../assets/css/typo.scss";
import clsx from "clsx";
import { ITypoProps } from "../interfaces/components";
import { Children } from "react";
const Text = (props: ITypoProps) => {
  const {
    onClick = () => {},
    hoverEffect,
    type,
    size,
    children,
    disableTransition,
  } = props;
  return (
    <p
      onClick={onClick}
      className={clsx(
        "typoEntire",
        hoverEffect && `${type}-text-hover`,
        `${type}-text`,
        `text-${size}`,
        disableTransition && "remove-transition"
      )}
    >
      {children}
    </p>
  );
};
export default Text;
