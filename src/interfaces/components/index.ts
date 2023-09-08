import { ReactNode } from "react"
export interface ITypoProps {
  hoverEffect? : boolean,
  onClick? :() => void,
  size: SIZE ,
  type: VARIANTS,
  children: ReactNode
  disableTransition? : boolean;
  classes? : string
}
export interface IModal {
  show : boolean;
  backdrop? : boolean | "static";
  onHide : () => void;
  fullScreen? : boolean | 'sm-down'| 'md-down'| 'lg-down'| 'xl-down'| 'xxl-down';
}
export interface IButtonProps {
  type: VARIANTS,
  children : ReactNode,
  onClick? : (...args : any[]) => void,
  load?: boolean | number,
  icon? : ReactNode,
  iconPosition? : 'left' | 'right',
  classes? : string
}
export interface IInputProps {
  type : VARIANTS,
  placeholder? : string,
  onChange: (val : any) => void;
  onBlur? : (val : any) => void;
  icon? : ReactNode,
  buttonChild? : ReactNode
}

export interface IProduct {
  imgUrl : string;
  title : string;
  price: number;
  currency : string;
  discountPrice? : number;
  saleOff? : boolean;
  stars? : number;
}
export interface IProductProps {
  productInfo : IProduct;
  onViewDetail : (pro : IProduct) => void;
}
export interface IProductCart extends IProduct {
  quantity : number,
}
export interface ICartList {
  listProduct : IProductCart[];
  show : boolean;
  totalPrice : number
}

export interface IImageLazyLoad {
  dataSrc : string,
}
export enum SIZE {
  SMALL  = "small", 
  MEDIUM =  "medium",
  LARGE = "large",
  XLARGE = "x-large",
  ERROR= "error"
}
export enum VARIANTS {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SECONDARY_OUTLINE = "secondary-outline",
  LINK = "link",
  SUCCESS ="success",
  DARK= "dark",
  LIGHT = "light",
  OUTLINE ="outline"
}