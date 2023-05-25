import { configureStore } from '@reduxjs/toolkit'

import  expanderSlice  from './reducers/SideExpand' 
import loaderSlice from './reducers/LoaderTrigger'

export const store = configureStore({
  reducer: {
    sideExpand: expanderSlice,
    loader: loaderSlice,
  },
})