import { combineReducers } from 'redux'
import authReducer from './authReducer'
import budgetReducer from './budgetReducer'
import errorReducer from './errorReducer'

export default combineReducers({
     auth: authReducer,
     budget: budgetReducer,
     errors:errorReducer
})