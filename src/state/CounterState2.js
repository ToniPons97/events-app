import { createSlice } from "@reduxjs/toolkit";

// This is the same as actions in CounterState.js, but done using Redux Toolkit library.
export const counter2State = createSlice({
    name: 'counter2',
    initialState: 0,
    reducers: {
        incCounter: (state, action) => state + action.payload,
        decCounter: (state, action) => state - action.payload,
        reset: (state, action) => 0
    }
});