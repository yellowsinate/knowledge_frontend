import axios from "axios"

export function getTags(page = '') {
    return async function getTagsThunk(dispatch) {
        const response = await axios.get(`/api/tags/${page}`)
        dispatch({ type: 'GET_TAGS', payload: response.data })
    }
}

export function getSearchByTags(page = '', tag = '') {
    return async function getSearchByTagsThunk(dispatch) {
        const response = await axios.get(`/api/tags/${tag}/${page}`)
        dispatch({ type: 'GET_SEARCH_BY_TAGS', payload: response.data })
    }
}