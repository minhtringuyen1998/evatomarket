import "../assets/css/typo.scss";
import clsx from "clsx";
import { ITypoProps } from "../interfaces/components";
const Text = (props: ITypoProps) => {
  const {
    onClick = () => {},
    hoverEffect,
    type,
    size,
    children,
    disableTransition,
    classes,
  } = props;
  return (
    <p
      onClick={onClick}
      className={clsx(
        "typoEntire",
        hoverEffect && `${type}-text-hover`,
        `${type}-text`,
        `text-${size}`,
        disableTransition && "remove-transition",
        classes
      )}
    >
      {children}
    </p>
  );
};
export default Text;
