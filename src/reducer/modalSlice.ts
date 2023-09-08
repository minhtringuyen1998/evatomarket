import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import { AppThunk , AppDispatch } from "../store";
import {  IProduct,  IProductCart } from "../interfaces/components";
import { RootState } from "./rootReducer";
import { Stats } from "fs";
interface IStateModal {
  name : string,
  data?:  any
}
let initialState :IStateModal = {
  name : "",
  data : {}
}
const modalSlice=  createSlice({
  name : "modalSlice",
  initialState,
  reducers : {
    open  (state , action : PayloadAction<IStateModal>) {
        const {name , data} = action.payload
        state.name = name
        state.data = data
    },
    close (state ) {
        state = initialState
    }
  }
})
export const  useGetModalData =( state:RootState ) => state.modalSlice
export  const {open , close} = modalSlice.actions
export default modalSlice.reducer