import { combineReducers, createStore } from "redux";
import { counterReducer, incrementCounter } from "./CounterState";
import { todosReducer } from "./TodosState";
import { usersReducer } from "./UsersState";

const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer,
    todos: todosReducer
});

export const store = createStore(rootReducer);

