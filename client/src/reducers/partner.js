import { GET_PARTNERS, PARTNER_ERROR, CLEAR_PARTNERS } from '../actions/types'

const initalState = {
    partners: [],
    loading: true,
    error: {}
}

export default (state = initalState, action)=> {
    switch(action.type){
        case GET_PARTNERS:
        return {
            ...state,
            partners: action.partners,
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
            loading: false
        }
        default:
        return state
    }   
        
}