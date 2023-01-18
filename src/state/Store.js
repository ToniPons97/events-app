import { combineReducers, createStore } from "redux";
import { counterReducer, incrementCounter } from "./CounterState";
import { usersReducer } from "./UsersState";

const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer
});

export const store = createStore(rootReducer);

