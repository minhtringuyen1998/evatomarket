import { IButtonProps } from "../interfaces/components";
import "../assets/css/button.scss";
import { AiOutlineLoading, AiOutlineCheck } from "react-icons/ai";
import clsx from "clsx";
import { useEffect, useState } from "react";
const Button = (props: IButtonProps) => {
  const { onClick = () => {}, children, type, icon, load } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const handleOnClickBtn = () => {
    if (typeof load == "number") {
      if (typeof load == "number") {
        setLoading(true);
        setTimeout(() => {
          onClick();
          setLoading(false);
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
  return (
    <div className="btn-container">
      <button
        className={clsx(
          "buttonEntire",
          `${type}-button`,
          icon ? "btn-icon-wrapper" : "",
          loading && "btn-loading"
        )}
        onClick={handleOnClickBtn}
      >
        {icon && <span>{icon}</span>}
        <span className="content">{children}</span>
        {typeof load !== "undefined" &&
          (loading ? (
            <span className="loading">
              <AiOutlineLoading />
            </span>
          ) : (
            <span className="success">
              {" "}
              <AiOutlineCheck />
            </span>
          ))}
      </button>
    </div>
  );
};
export default Button;
