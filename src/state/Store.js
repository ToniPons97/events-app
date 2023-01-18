import { combineReducers, createStore } from "redux";
import { counterReducer } from "./CounterState";
import { counterState2 } from "./CounterState2";

export const store = createStore(combineReducers({
    counter1: counterReducer,
    counter2: counterState2.reducer
}));
