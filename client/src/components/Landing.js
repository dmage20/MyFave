import React, {useEffect, Fragment} from 'react'
// import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { getPartners} from '../actions/partner'
import Spinner from './Spinner'
import PartnerList from './PartnerList'

const  Landing = ({partner:{ partners, loading, skip, count}, getPartners}) => {
    useEffect(()=>{
        getPartners(skip)
    },[])
    return loading && partners.length === 0 ? <Spinner /> : <Fragment>
        <h1 className="large text-primary">Partners Page</h1>
        <p>{(skip).toString(10)} through {(skip + 23).toString(10)} of {count} total</p>
        <button       
        onClick={(e) => {
            
            return (getPartners(skip - 23))
          }}
           className="button">Previous Page
        </button>
        <button       
        onClick={(e) => {
            return (getPartners(skip + 23))
          }}
           className="button">Next Page
        </button>
        <button       
        onClick={(e) => {
            return (getPartners())
          }}
           className="button">First Page
        </button>
        <PartnerList />
    </Fragment>
}

const mapStateToProps = (state) =>({
    partner: state.partner
})
export default connect(mapStateToProps, {getPartners})(Landing)

