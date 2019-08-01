import axios from 'axios'

import {GET_PARTNERS, PARTNER_ERROR } from './types'

export const getPartners = (skip = 0) => async dispatch =>{
    try {
        const res = await axios.get(`/api/partners?limit=23&skip=${skip}`)
        dispatch({
            type: GET_PARTNERS,
            partners: res.data.partners,
            skip,
            count: res.data.count
        })
    } catch(e){
        dispatch({
            type: PARTNER_ERROR,
            error: {msg: e.response.statusText, status: e.response.status}
        })
    }
}

