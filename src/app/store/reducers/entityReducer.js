import {SAVE_ENTITY, UPDATE_ENTITIES, LOADING_STATUS} from "../actions/actionTypes";

const initialState = {
    entities: {},
    loading: false
};

export default function userListReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_ENTITY:
            let copyEntities = {...state.entities};
            copyEntities[action.id] = action.entity;
            return {
                ...state,
                entities: copyEntities
            };
        case UPDATE_ENTITIES:
            return {
                ...state,
                entities: action.entities
            };
        case LOADING_STATUS:
            return {
                ...state,
                loading: action.isLoading
            };

        default:
            return state;
    }
}