import React, {useEffect, Fragment} from 'react'
// import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { getOffers} from '../actions/offer'
import Spinner from './Spinner'
import OffersList from './OffersList'

const  Offers = (props) => {
   const {getOffers, history, location, match, offer:{loading,offers}} = props 
    useEffect(()=>{
        getOffers(match.params.company_id)
    },[])
    return loading && offers.length === 0 ? <Spinner /> :  <Fragment>
        <h1 className="large text-primary">Offers Page</h1>

    <OffersList />
    </Fragment>
}

const mapStateToProps = (state) =>({
    offer: state.offer
})
export default connect(mapStateToProps, {getOffers})(Offers)


// {offer:{ partner, loading, offers}, getOffers}