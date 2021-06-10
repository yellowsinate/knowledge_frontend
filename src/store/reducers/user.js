const initialState = {
    token: null
}

export default function userReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                token: action.payload.token
            }
        case 'LOGOUT':
            return {
                ...state,
                token: null
            }
        default:
            return state;
    }
}