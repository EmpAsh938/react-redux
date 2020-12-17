import {
    BUY_ORANGE,
    SELL_ORANGE,
} from './orangeTypes'

export const increaseOrange = () => {
    return {
        type: SELL_ORANGE
    }
}
export const decreaseOrange = () => {
    return {
        type: BUY_ORANGE
    }
}