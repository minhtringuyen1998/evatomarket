import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import { AppThunk , AppDispatch } from "../store";
import {  IProduct,  IProductCart } from "../interfaces/components";
import { RootState } from "./rootReducer";
import { Stats } from "fs";

interface IStateCart  {
  products : IProductCart[],
  totalPrice : number,
  totalItem : number
}
let initState : IStateCart = {
  products : [],
  totalPrice : 0,
  totalItem : 0

}
const cartSlice = createSlice({
  name : "cartSlice", 
  initialState : initState,
  reducers : {
    addToCart (state , action :  PayloadAction<{product : IProduct , quantity? : number}>)  {
      const {product , quantity = 1 } = action.payload
        let isProductExisted = state.products.findIndex((prod : IProductCart) => prod.title == product.title ) 
        if(isProductExisted !== -1) {
          state.products[isProductExisted].quantity += 1
        } else {
          state.products.push({...product , quantity : quantity})
        }
        state.totalPrice += product.price * quantity
        state.totalItem += quantity
    },
    removeFromCart(state , action: PayloadAction<string>) {
      let indexProduct = state.products.findIndex((product : IProduct) => product.title == action.payload)
      let product = state.products[indexProduct]
      state.totalPrice = state.totalPrice - (product.quantity * product.price)
      state.totalItem = state.totalItem - product.quantity
      state.products = state.products.filter((item :IProductCart) => item.title !== product.title)
    }
  }
})
export const useGetCart = (state :RootState) => state.cartSlice
export const {addToCart  ,removeFromCart }  = cartSlice.actions
export default cartSlice.reducer