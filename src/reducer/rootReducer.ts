import { combineReducers } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'

const rootReducer = combineReducers({
  cartSlice,
})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer