import { configureStore } from '@reduxjs/toolkit'
import favoritesSlice from './slices/favoritesSlice'

export const store = configureStore({
  reducer: {
    favorites: favoritesSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>