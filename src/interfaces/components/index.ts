import { ChangeEvent, ChangeEventHandler, ReactNode, ReactSVGElement } from "react"
export interface ITypoProps {
  hoverEffect? : boolean,
  onClick? :() => void,
  size: SIZE ,
  type: VARIANTS,
  children: ReactNode
  disableTransition? : boolean
}
export interface IButtonProps {
  type: VARIANTS,
  children : ReactNode,
  onClick? : (...args : any[]) => void,
  load?: boolean | number,
  icon? : ReactNode,
  iconPosition? : 'left' | 'right'
}
export interface IInputProps {
  type : VARIANTS,
  placeholder? : string,
  onChange: (val : any) => void;
  onBlur? : (val : any) => void;
  icon? : ReactNode,
}
export interface ICartList {
  onRemoveItem? : (id : string ) => void;
  onClickItem?: (id : string ) => void;
  onCheckOut?: () => void;
  listProduct? : any[];
  show : boolean;
}
export interface IImageLazyLoad {
  dataSrc : string,
}
export enum SIZE {
  SMALL  = "small", 
  MEDIUM =  "medium",
  LARGE="large",
  XLARGE = "x-large",
  ERROR= "error"
}
export enum VARIANTS {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  LINK = "link",
  SUCCESS ="success",
  DARK= "dark",
  LIGHT = "light"
}