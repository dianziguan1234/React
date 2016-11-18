import { combineReducers } from 'redux'
import reducer from './Reducer'
import detailReducer from './DetailReducer'

const rootReducer = combineReducers ({
    reducer,
    detailReducer
})

export default rootReducer
