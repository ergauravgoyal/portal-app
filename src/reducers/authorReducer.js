import {
    CREATE_AUTHOR,
    EDIT_AUTHOR,
    FETCH_AUTHORS,
    FETCH_AUTHOR,
    DELETE_AUTHOR,
    FETCH_AUTHORS_REQUESTED,
    FETCH_AUTHORS_SUCCESS,
    FETCH_AUTHORS_ERROR
} from "../actions/types";
import _ from "lodash";

const initialState = {
    isLoading: false,
    authors: [],
    error: null
}
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AUTHORS_REQUESTED:
            return { ...state, isLoading: true };
        case FETCH_AUTHORS_SUCCESS:
            return { ...state, isLoading: false, authors: action.payload };
        case FETCH_AUTHORS_ERROR:
            return { ...state, isLoading: false, isError: true }
        case CREATE_AUTHOR:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_AUTHOR:
            debugger;
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_AUTHOR:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_AUTHOR:
            debugger;
            return _.omit(state, action.payload);
        case FETCH_AUTHORS:
            debugger;
            return { ...state, authors: action.payload }; //mapKeys return object
        default:
            return state;
    }
};
