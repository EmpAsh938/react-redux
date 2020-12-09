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

const initialState = {
    loading: false,
    products: [],
    totalSum: 0,
    totalQuantity: 0
}

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LOADING:
            return {
                ...state, loading: true
            }
        case FETCH_DATA:
            return {
                ...state, loading: false, products: [...action.payload]
            }
        case SET_ERROR:
            return {
                ...state, loading: false, products: []
            }
        case SET_INCREASE:
            let newProduct = state.products.map(item => 
                {
                    if (item.id === action.payload) {
                        return {
                            ...item, amount: item.amount + 1
                        }
                    } return item

            })
            return {
                ...state, products: [...newProduct]
            }
        case SET_DECREASE:
            let tempProd = state.products.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item, amount: item.amount - 1
                    }
                } return item
            }).filter(item => item.amount !== 0)
            return {
                ...state, products: tempProd
            }
        case SET_REMOVE:
            let newProducts = state.products.filter(item => item.id !== action.payload)
            return {
                ...state, products: newProducts
            }
        case SET_RESET:
            return {
                ...state, products: []
            }
        case SET_CALCULATE:
            let {total, sum} = state.products.reduce((acc, next) => {
                const { amount, price } = next
                acc.total += amount
                acc.sum += price * amount
                return acc
            }, {
                total: 0,
                sum: 0
            })
            sum = parseFloat(sum).toFixed(2)
            return {
                ...state, totalSum: sum, totalQuantity: total
            }
        default:
            return state
    }
}

export default productsReducer