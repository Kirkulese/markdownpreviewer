import { createSlice } from '@reduxjs/toolkit';

export const mkdnSlice = createSlice({
    name: 'markdown',
    initialState: 'working???',
    reducers : {
        updateState: (state, action) => {
            // state = action.payload
            return action.payload
        }
    },

})

export const { updateState } = mkdnSlice.actions

export default mkdnSlice.reducer
