import axios from 'axios';

const initialState = {
    data: [],
    dataCount: 0
}

export default function instructionsReducer (state = initialState, action = {}) {
    switch (action.type) {
        case 'GET_POPULAR_INSTRUCTIONS':
            return {
                ...state,
                data: action.payload.instructions,
                dataCount: action.payload.count
            }
        case 'GET_CURRENT_INSTRUCTION':
            return {
                ...state,
                token: ''
            }
        default:
            return state;
    }
}