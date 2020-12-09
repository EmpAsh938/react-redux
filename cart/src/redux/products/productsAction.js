import axios from 'axios'
import {
    SET_LOADING,
    FETCH_DATA,
    SET_ERROR,
    SET_INCREASE,
    SET_DECREASE,
    SET_REMOVE,
    SET_RESET,
    SET_CALCULATE
} from './productsTypes'

export const fetchReq = () => {
    return (dispatch) => {
        dispatch(loading())
        axios
        .get('https://course-api.com/react-useReducer-cart-project')
        .then(response => {
            const user = response.data
            dispatch(fetchData(user))
        })
        .catch(err => {
            dispatch(error())
            console.log(err)
        })
    }
}

export const loading = () => {
    return {
        type: SET_LOADING
    }
}

export const fetchData = products => {
    return {
        type: FETCH_DATA,
        payload: products
    }
}

export const error = () => {
    return {
        type: SET_ERROR
    }
}

export const itemIncrease = (id) => {
    return {
        type: SET_INCREASE,
        payload: id
    }
}
export const itemDecrease = (id) => {
    return {
        type: SET_DECREASE,
        payload: id
    }
}
export const itemRemove = (id) => {
    return {
        type: SET_REMOVE,
        payload: id
    }
}
export const cartReset = () => {
    return {
        type: SET_RESET
    }
}

export const itemTotal = () => {
    return {
        type: SET_CALCULATE
    }
}