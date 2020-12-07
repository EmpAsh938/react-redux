
import {
    SET_LOADING,
    SET_DATA,
    SET_ERROR
} from './actionTypes'

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LOADING:
            return {
                ...state, loading: true
            }
        case SET_DATA:
            return {
                ...state, loading: false, users: action.payload
            }
        case SET_ERROR:
            return {
                ...state, loading: false, users: [], error:action.payload 
            }
        default:
            return state
    }
}

export default reducer