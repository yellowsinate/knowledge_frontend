import axios from 'axios';

const initialState = {
    searchData: {},
    searchDataCount: 0
}

export default function searchReducer (state = initialState, action = {}) {
    switch (action.type) {
        case 'GET_SEARCH_RESULT':
            let { tags, articles, instructions, faq, answers } = action.payload
            console.log(action.payload)
            return {
                ...state,
                searchData: {
                    articles,
                    instructions,
                    faq,
                    answers, 
                    tags
                }
            }
        case 'GET_SEARCH_RESULT_OF_CURRENT_MODEL':
            return {
                ...state,
            }
        default:
            return state;
    }
}