import { combineReducers } from 'redux'
import loginReducer from "./login"
import navbarReducer from "./navbar"

export default combineReducers({
    login: loginReducer,
    navbar: navbarReducer
});