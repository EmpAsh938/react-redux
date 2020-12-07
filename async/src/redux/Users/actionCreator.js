import axios from 'axios'
import {
    SET_LOADING,
    SET_DATA,
    SET_ERROR
} from './actionTypes'

export const fetchReq =  () => {
    return (dispatch) => {
        dispatch(loading())
        axios
        .get('https://randomuser.me/api/?results=10')
        .then(response => {
            const user = response.data
            const newUser = user.results
            dispatch(fetchData(newUser))
        })
        .catch(error => {
            dispatch(errorMessage(error.message))
        })
    }
}

export const loading = () => {
    return {
        type: SET_LOADING,
    }
}

export const fetchData = newUser => {
    return {
        type: SET_DATA,
        payload: newUser
    }
}  

export const errorMessage = error => {
    return {
        type: SET_ERROR,
        payload: error
    }
}
