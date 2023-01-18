// State's initial value
const defaultState = 0;

// Action types
const INCREMENT = 'COUNTER@INCREMENT';
const DECREMENT = 'COUNTER@DECREMENT';
const RESET = 'COUNTER@RESET';

// Action creators (utility functions)
export const incrementCounter = (by = 1) => {
    return {
        type: INCREMENT,
        payload: by
    }
}

export const decrementCounter = (by = 1) => {
    return {
        type: DECREMENT,
        payload: by
    }
}

export const resetCounter = () => {
    return {
        type: RESET,
    }
}

// Counter Reducer
export const counterReducer = (state = defaultState, action) => {
    switch(action.type) {
        case INCREMENT: 
            return state + action.payload;
              
        case DECREMENT: 
            return state - action.payload;
              
        case RESET: 
            return defaultState;
            
        default: 
            return state;
    }
}