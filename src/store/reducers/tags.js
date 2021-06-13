import axios from 'axios';

const initialState = {
    data: [],
    searchData: {},
    searchDataCount: 0,
    dataCount: 0,
    searchModel: [],
    searchModelCount: 0
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
            let { articles, instructions, faq, answers } = action.payload
            return {
                ...state,
                searchData: {
                    articles,
                    instructions,
                    faq,
                    answers
                }
            }
        case 'GET_SEARCH_BY_TAGS_AND_MODEL':
            return {
                ...state,
                searchModel: action.payload.data[action.payload.model],
                searchModelCount: action.payload.data.count
            }
        default:
            return state;
    }
}