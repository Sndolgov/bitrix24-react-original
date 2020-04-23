import {
    ADD_ENTITIES,
    DELETE_USER,
} from "../actions/actionTypes";

const initialState = {
    entities: {}
};

export default function userListReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ENTITIES:

            return {
                ...state,
                entities: action.entities
            };

        default:
            return state;
    }
}