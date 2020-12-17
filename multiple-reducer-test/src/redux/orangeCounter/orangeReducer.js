import { 
    BUY_ORANGE,
    SELL_ORANGE,
 } from './orangeTypes'

 const initialState = {
    noOfOranges: 100,
 }

 const orangeReducer = ( state = initialState, action ) => {
     switch (action.type) {
         case BUY_ORANGE:
             return {
                 ...state, noOfOranges: state.noOfOranges -= 1
             }
         case SELL_ORANGE:
             return {
                 ...state, noOfOranges: state.noOfOranges += 1
             }
        default:
            return state
     }
 }


 export default orangeReducer