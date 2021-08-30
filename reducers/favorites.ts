import { createSlice } from '@reduxjs/toolkit'
type FavoritesState = {
  ids: string[]
}
const favoritesInitialState: FavoritesState = {
  ids: ['m1', 'm2', 'm7'],
}
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: favoritesInitialState,
  reducers: {
    setFavorites(state, action: { payload: string[] }) {
      const targetId = action.payload
      state.ids = targetId
    },
    addFavorite(state, action: { payload: string }) {
      const targetId = action.payload
      if (!state.ids.includes(targetId)) {
        state.ids.push(targetId)
      }
    },
    toggleFavorite(state, action: { payload: string }) {
      const targetId = action.payload
      if (state.ids.includes(targetId)) {
        state.ids = state.ids.filter(id => id !== targetId)
      } else {
        state.ids.push(targetId)
      }
    },
    removeFavorite(state, action: { payload: string }) {
      const targetId = action.payload
      state.ids = state.ids.filter(id => id !== targetId)
    },
  },
})
const FavoritesReducer = favoritesSlice.reducer
const FavoritesAction = favoritesSlice.actions

export default favoritesSlice
export { FavoritesAction, FavoritesReducer }
