import { combineReducers } from 'redux'
import { session } from './session'
import { account } from './account'


export default combineReducers({
  session,
  account
})