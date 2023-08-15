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
  } = props;
  return (
    <div className={clsx(`${type}-input`, "inputEntire")}>
      <input placeholder={placeholder} onChange={onChange} />
      {icon && <div className="iconWrapper">{icon}</div>}
    </div>
  );
};
export default InputComponent;
