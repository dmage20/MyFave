import { GET_PARTNERS, PARTNER_ERROR, CLEAR_PARTNERS, START_PARTNERS } from '../actions/types'

const initalState = {
    partners: [],
    skip: 23,
    loading: true,
    count: null,
    error: {}
}

export default (state = initalState, action)=> {
    switch(action.type){
        case GET_PARTNERS:
        return {
            ...state,
            partners: action.partners,
            skip: action.skip,
            count: action.count,
            loading: false

        }
        case PARTNER_ERROR:
        return {
            ...state,
            loading: false,
            error: action.error
        }
        case CLEAR_PARTNERS:
        return {
            ...state,
            partners: [],
            skip: 23,
            loading: false
        }
        default:
        return state
    }   
        
}