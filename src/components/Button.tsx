import { IButtonProps } from "../interfaces/components";
import "../assets/css/button.scss";
import { AiOutlineLoading, AiOutlineCheck } from "react-icons/ai";
import clsx from "clsx";
import { useEffect, useState } from "react";
const Button = (props: IButtonProps) => {
  const {
    onClick = () => {},
    children,
    type,
    icon,
    load,
    classes,
    iconPosition,
  } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const handleOnClickBtn = () => {
    if (typeof load == "number") {
      if (typeof load == "number") {
        setLoading(true);
        setTimeout(() => {
          onClick();
          setLoading(false);
          setShowSuccess(true);
        }, load);
      }
    } else {
      onClick();
    }
  };
  useEffect(() => {
    if (typeof load == "boolean") {
      setLoading(load);
    }
  }, [load]);
  useEffect(() => {
    let timeout: any;
    if (showSuccess) {
      timeout = setTimeout(() => {
        setShowSuccess(false);
      }, 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [showSuccess]);
  return (
    <div className="btn-container">
      <button
        className={clsx(
          "buttonEntire",
          `${type}-button`,
          icon ? "btn-icon-wrapper" : "",
          loading && "btn-loading",
          iconPosition && `${iconPosition}_icon`,
          classes
        )}
        onClick={handleOnClickBtn}
      >
        {icon && <span className="icon-btn">{icon}</span>}
        <span className="content">{children}</span>
        {typeof load !== "undefined" &&
          (loading ? <span className="loading"></span> : <></>)}
        {showSuccess && (
          <span className="success">
            {" "}
            <AiOutlineCheck />
          </span>
        )}
      </button>
    </div>
  );
};
export default Button;
