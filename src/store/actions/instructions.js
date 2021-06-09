import axios from "axios"

export function getInstructions(page) {
    return async function getInstructionsThunk(dispatch) {
        const response = await axios.get(`/api/instructions/${page}`)
        dispatch({ type: 'GET_POPULAR_INSTRUCTIONS', payload: response.data })
    }
}