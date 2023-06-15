import { combineReducers } from 'redux'
import modal from './modal/Reducers'
import user from './user/Reducers'


export default combineReducers({ modal, user })