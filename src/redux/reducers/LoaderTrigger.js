
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoaderActive: false,
}

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    triggerLoader: (state) => {
        state.isLoaderActive = !state.isLoaderActive
    },
  },
})

// Action creators are generated for each case reducer function
export const { triggerLoader } = loaderSlice.actions

export default loaderSlice.reducer