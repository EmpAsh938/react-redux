import { 
    BUY_APPLE,
    SELL_APPLE,
 } from './appleTypes'

 const initialState = {
    noOfApples: 100,
 }

 const appleReducer = ( state = initialState, action ) => {
     switch (action.type) {
         case BUY_APPLE:
             return {
                 ...state, noOfApples: state.noOfApples -= 1
             }
         case SELL_APPLE:
             return {
                 ...state, noOfApples: state.noOfApples += 1
             }
        default:
            return state
     }
 }


 export default appleReducer