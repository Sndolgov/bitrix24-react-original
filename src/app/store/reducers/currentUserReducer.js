import {

} from "../actions/actionTypes";
import {SET_CURRENT_USER} from "../actions/actionTypes";

const initialState = {
    currentUser: null
};

export default function userListReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.user
            };

        default:
            return state;
    }
}