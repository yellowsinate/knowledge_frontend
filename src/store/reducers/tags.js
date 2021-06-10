import axios from 'axios';

const initialState = {
    data: [],
    dataCount: 0
}

export default function tagsReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'GET_TAGS':
            return {
                ...state,
                data: action.payload.tags,
                dataCount: action.payload.count
            }
        case 'GET_SEARCH_BY_TAGS':
            return {
                ...state
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