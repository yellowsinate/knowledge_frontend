import axios from "axios"

export function authUser(userData) {
    return async function authUserThunk(dispatch) {
        const response = await axios.post('/token-auth/', userData)
        dispatch({ type: 'LOGIN', payload: response.data })
    }
}