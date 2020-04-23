import {
    ADD_RATING_USER_ROW,
    DELETE_USER,
    RESET_SAVING_ERROR,
    SAVING_ERROR
} from "../actions/actionTypes";

const initialState = {
    loading: true,
    userList: {},
    error: null
};

export default function userListReducer(state = initialState, action) {
    switch (action.type) {
        case DELETE_USER:
            let cloneUserList = {...state.userList};
            delete cloneUserList[action.id];
            return {
                ...state,
                userList: cloneUserList
            };
        case ADD_RATING_USER_ROW:
            return {
                ...state,
                userList: action.userList
            };
        case SAVING_ERROR:
            return {
                ...state,
                error: action.error
            };
        case RESET_SAVING_ERROR:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
}