//ducks pattern for modern redux, put as much logic as possible into one file and

import { createSlice } from '@reduxjs/toolkit';


//initialize state
const initialState = {
    value: 0
}

//creatse the slice (which is most of the redux logic)
// required object as argument with name, initialstate, and the reducers as an object
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        //increment - inline function declaration, with redux toolkit this does not mutate state although it looks like it
        incremented(state) {
            state.value++
        },
        //decrement
        //reset
    }
})

export const { incremented } = counterSlice.actions
export default counterSlice.reducer