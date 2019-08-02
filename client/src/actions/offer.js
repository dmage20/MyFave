import axios from 'axios'

import {GET_OFFERS, OFFERS_ERROR } from './types'

export const getOffers= (partner) => async dispatch =>{
    try {
        const res = await axios.get(`/api/offers/${partner}`)
        dispatch({
            type: GET_OFFERS,
            partner: res.data.partner,
            offers: res.data.offers
        })
    } catch(e){
        dispatch({
            type: OFFERS_ERROR,
            error: {msg: e.response.statusText, status: e.response.status}
        })
    }
}
