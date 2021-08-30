import { configureStore } from '@reduxjs/toolkit'
import { MealsReducer } from '../reducers/meals'
import { FavoritesReducer } from '../reducers/favorites'

const store = configureStore({
  reducer: {
    meals: MealsReducer,
    favorites: FavoritesReducer,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
