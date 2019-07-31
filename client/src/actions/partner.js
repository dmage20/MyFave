import axios from 'axios'

import {GET_PARTNERS, PARTNER_ERROR } from './types'

export const getPartners = () => async dispatch =>{
    try {
        const res = await axios.get('/api/partners')
        dispatch({
            type: GET_PARTNERS,
            partners: res.data
        })
    } catch(e){
        dispatch({
            type: PARTNER_ERROR,
            error: {msg: e.response.statusText, status: e.response.status}
        })
    }
}