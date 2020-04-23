import {combineReducers} from 'redux'
import userListReducer from "./userListReducer";
import currentUserReducer from "./currentUserReducer";
import entityReducer from "./entityReducer";

export default combineReducers({
    userListReducer,
    currentUserReducer,
    entityReducer
})