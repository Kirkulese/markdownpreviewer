import { configureStore } from '@reduxjs/toolkit'

import markdownReducer from '../features/markdown/mkdnSlice'

//this auto calls combine reducers on the object passed into reducer
export const store = configureStore({
    reducer: { markdown: markdownReducer },
})