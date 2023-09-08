import { combineReducers } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import modalSlice from './modalSlice'

const rootReducer = combineReducers({
  cartSlice,
  modalSlice
})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer