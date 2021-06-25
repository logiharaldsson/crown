// Reducer is actually a function that gets 2 properties, state and action

const INITIAL_STATE = {
    currentUser: null
}
// If state is un initialized it will get initial state
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;