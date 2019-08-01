import { GET_OFFERS, OFFERS_ERROR, CLEAR_OFFERS } from '../actions/types'

const initalState = {
    partner: null,
    offers: [],
    loading: true,
    error: {}
}

export default (state = initalState, action)=> {
    switch(action.type){
        case GET_OFFERS:
        return {
            ...state,
            partner: action.partner,
            loading: false,
            offers: action.offers

        }
        case OFFERS_ERROR:
        return {
            ...state,
            loading: false,
            error: action.error
        }
        case CLEAR_OFFERS:
        return {
            ...state,
            partner: null,
            loading: false,
            offers: []
        }
        default:
        return state
    }   
        
}