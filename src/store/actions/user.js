import axios from "axios";
import jwt from 'jsonwebtoken';
import { toast } from "react-toastify";

export function authUser(userData) {
    return async function authUserThunk(dispatch) {
        const response = await axios.post('/token-auth/', userData)
        dispatch({ type: 'LOGIN', payload: response.data })
    }
}

export function getUserIsStaffFromToken (token) {
    return async function getUserIsStaffFromTokenThunk(dispatch) {
        if (!token)
            return false

        try {
            const decoded = await jwt.decode(token, process.env.REACT_APP_SECRET_KEY);
            if (!decoded)
                dispatch({type: 'LOGOUT'})

            if (decoded?.is_staff) {
                return decoded.is_staff
            } else {
                return false
            }
        } catch (err) {
            dispatch({type: 'LOGOUT'});
            toast.error('Ошибка авторизации!');
        }

    }
}
