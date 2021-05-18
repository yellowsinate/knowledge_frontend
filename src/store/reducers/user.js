const initialState = {
    token: null
}

export default function userReducer (state = initialState, action = {}) {
    switch (action.type) {
        case 'LOGIN':
            console.log(state)
            return {
                ...state,
                token: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                token: ''
            }
        default:
            return state;
    }
}