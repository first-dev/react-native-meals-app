import { createSlice } from '@reduxjs/toolkit'
type MealsState = {}
const mealsInitialState: MealsState = {}
const mealsSlice = createSlice({
  name: 'meals',
  initialState: mealsInitialState,
  reducers: {
    addMeal() {},
  },
})
const MealsReducer = mealsSlice.reducer
const MealsAction = mealsSlice.actions

export default mealsSlice
export { MealsAction, MealsReducer }
