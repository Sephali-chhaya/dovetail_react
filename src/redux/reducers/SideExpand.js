
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: true,
}

export const expanderSlice = createSlice({
  name: 'sideExpand',
  initialState,
  reducers: {
    trigger: (state) => {
        state.open = !state.open
    },
  },
})

// Action creators are generated for each case reducer function
export const { trigger } = expanderSlice.actions

export default expanderSlice.reducer