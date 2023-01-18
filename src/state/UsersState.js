const defaultState = [];


const ADD = 'USERS@ADD';
const EDIT = 'USERS@EDIT';
const REMOVE = 'USERS@REMOVE';
const CLEAR = 'USERS@CLEAR';

export const addUser = (user) => {
    return {
        type: ADD,
        payload: user
    }
}

export const editUser = (id, data) => {
    return {
        type: EDIT,
        payload: {id, data}
    }
}

export const removeUser = (id) => {
    return {
        type: REMOVE,
        payload: id
    }
}

export const clearUsers = () => {
    return {
        type: CLEAR
    }
}

export const usersReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD:
            return [...state, action.payload];
        case EDIT:
            return state.map(user => {
                if (user.id === action.payload.id)
                    return {...user, ...action.payload.data};
                return user;
            }); 
        case REMOVE:
            return state.filter(user => user.id !== action.payload);
        case CLEAR:
            return defaultState;
        default:
            return state;
    }
}