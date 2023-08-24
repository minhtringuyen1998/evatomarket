import clsx from "clsx";
import { IInputProps } from "../interfaces/components";
import "../assets/css/input.scss";
const InputComponent = (props: IInputProps) => {
  const {
    placeholder,
    onChange = (e: any) => {},
    onBlur = () => {},
    type,
    icon,
    buttonChild,
  } = props;
  return (
    <div className={clsx(`${type}-input`, "inputEntire")}>
      <input placeholder={placeholder} onChange={onChange} />
      {icon && <div className="iconWrapper">{icon}</div>}
      {buttonChild && <div className="buttonWrapper">{buttonChild}</div>}
    </div>
  );
};
export default InputComponent;
