import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
    value: any
}

const initialState: InitialState = {
    value: []
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addItem(state, action)  {
        
    }
  }
})

// Action creators are generated for each case reducer function
export const { } = favoritesSlice.actions

export default favoritesSlice.reducer