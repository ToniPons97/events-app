import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";

const defaultState = [];

const ADD = 'TODOS@ADD';
const REMOVE = 'TODOS@REMOVE';
const EDIT = 'TODOS@EDIT';
const CLEAR = 'TODOS@CLEAR';


export const addTodo = (todo) => {
    return {
        type: ADD,
        payload: todo
    }
}

export const removeTodo = (id) => {
    return {
        type: REMOVE,
        payload: id
    }
}

export const editTodo = (id, data) => {
    return {
        type: EDIT,
        payload: {id, data}
    }
}

export const clearTodo = () => { type: CLEAR };


export const todosReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD:
            return [...state, action.payload]
        case REMOVE:
            return state.filter(user => user.id !== action.payload);
        case EDIT:
            return state.map(user => {
                if (user.id === action.payload.id)
                    return {...user, ...action.payload.data};
                return user;
            });
        case CLEAR:
            return defaultState;
        default:
            return state;
            
    }    
}
