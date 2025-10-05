import { SET_LIST, GET_LIST, SET_DETAIL, GET_DETAIL } from "./constants";

const initState = {
    list: [],
    detail: null
}

const reducer = (state = initState, action) => {
    switch(action.type){
        case SET_LIST:
            return {
                ...state,
                list: action.payload
            }
        case GET_LIST:
            return {
                ...state
            }
        case SET_DETAIL:
            return {
                ...state,
                detail: action.payload
            }
        case GET_DETAIL:
            return {
                ...state
            }
        default:
            return state
    }
}

export default reducer;