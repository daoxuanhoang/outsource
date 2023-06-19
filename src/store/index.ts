import { combineReducers } from 'redux'
import modal from './modal/Reducers'
import user from './user/Reducers'
import notify from './notify/Reducer'
import home from './home/Reducers'


export default combineReducers({ modal, user, notify, home })