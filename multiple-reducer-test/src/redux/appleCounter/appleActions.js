import {
    BUY_APPLE,
    SELL_APPLE,
} from './appleTypes'

export const increaseApple = () => {
    return {
        type: SELL_APPLE
    }
}
export const decreaseApple = () => {
    return {
        type: BUY_APPLE
    }
}