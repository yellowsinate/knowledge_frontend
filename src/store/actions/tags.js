import axios from "axios"

export function getTags(page = '') {
    return async function getTagsThunk(dispatch) {
        const response = await axios.get(`/api/tags/${page}`)
        dispatch({ type: 'GET_TAGS', payload: response.data })
    }
}

export function getSearchByTags(data) {
    return async function getSearchByTagsThunk(dispatch) {
        const response = await axios.get(`/api/tags/search/${data.tag}`)
        dispatch({ type: 'GET_SEARCH_BY_TAGS', payload: response.data })
    }
}

export function getSearchByTagsAndModel(data) {
    return async function getSearchByTagsAndModelthunk(dispatch) {
        const response = await axios.get(`/api/tags/search/${data.tag}/${data.model}/${data.page}`)
        dispatch({ type: 'GET_SEARCH_BY_TAGS_AND_MODEL', payload: {model: data.model, data: response.data} })
    }
}