import React, {useEffect, Fragment} from 'react'
// import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { getPartners} from '../actions/partner'
import Spinner from './Spinner'
import PartnerList from './PartnerList'

const  Landing = ({partner:{ partners, loading}, getPartners}) =>{
    useEffect(()=>{
        getPartners()
    },[])
    return loading && partners.length === 0 ? <Spinner /> : <Fragment>
        <h1 className="large text-primary">Partners Page</h1>
        <PartnerList />
    </Fragment>
}

const mapStateToProps = (state) =>({
    partner: state.partner
})
export default connect(mapStateToProps, {getPartners})(Landing)

