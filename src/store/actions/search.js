import axios from "axios";
import { toast } from "react-toastify";

export function getSearchResult(searchData) {
    return async function getSearchResultThunk(dispatch) {
        try {
            const response = await axios.get(`/api/search/${searchData}`)
            dispatch({ type: 'GET_SEARCH_RESULT', payload: response.data })
        } catch (err) {
            toast.error('Ошибка поиска!')
        }
    }
}
