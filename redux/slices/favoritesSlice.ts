import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

type ValueType = {
  id: string
  title: string
  type: string
  img: string
  time: number
  count: number
}

interface InitialState {
  value: ValueType[]
}

const initialState: InitialState = {
  value: []
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addItem(state, action)  {
      const item = action.payload
      const findItem = state.value.find((obj) => obj.id === item.id)

      if(findItem) {
        findItem.count++
      } else {
        state.value.push({
          ...action.payload,
          count: 1
        })
      }
    },
    removeItem(state, action) {
      const item = action.payload
      state.value = state.value.filter((obj) => obj.id !== item)
      const findItem = state.value.find((obj) => obj.id === item)

      if(findItem) {
        findItem.count--
      }
    },
    clearItem(state) {
      state.value = []
    }
  }
})

export const selectFav = (state: RootState) => state.favorites

export const { addItem, removeItem, clearItem } = favoritesSlice.actions

export default favoritesSlice.reducer