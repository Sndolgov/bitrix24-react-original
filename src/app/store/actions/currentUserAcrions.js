import {SET_CURRENT_USER} from "./actionTypes";

export function getCurrentUser() {
    return dispatch => {
        return BX24.init(function () {
            BX24.callMethod("user.current", {}, function (res) {
                dispatch({
                    type: SET_CURRENT_USER,
                    user: res.answer.result
                });
            });
        });
    }
}