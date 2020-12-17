import { combineReducers } from 'redux'
import appleReducer from './appleCounter/appleReducer' 
import orangeReducer from './orangeCounter/orangeReducer' 

const rootReducer = combineReducers({
    apple: appleReducer,
    orange: orangeReducer,
})

export default rootReducer