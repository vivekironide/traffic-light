import { createSlice } from '@reduxjs/toolkit'

export const starwarsSlice = createSlice({
  name: 'starwars',
  initialState: {
    title: 'Welcome',
    favorites: [],
  },
  reducers: {
    add: (state, action) => {
      if(! state.favorites.some((favorite) => favorite.label === action.payload)) {
        state.favorites.push({ key: state.favorites.length + 1, 'label': action.payload })
      }
    },
    remove: (state, action) => {
      state.favorites = state.favorites.filter((favorite) => favorite === action.payload)
    },
    addTitle: (state, action) => {
      state.title = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove, addTitle } = starwarsSlice.actions

export default starwarsSlice.reducer