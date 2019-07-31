import React, {useEffect, Fragment} from 'react'
// import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { getPartners} from '../actions/partner'
import Spinner from './Spinner'

const  Landing = ({partner:{ partners, loading}, getPartners}) =>{
    useEffect(()=>{
        getPartners()
    },[])
    return loading && partners.length === 0 ? <Spinner /> : <Fragment>
        <h1 className="large text-primary">Landing</h1>
        <p className="lead" >
        <i className="fas fa-user"></i> Welcome 
        </p>
    
    </Fragment>
}

const mapStateToProps = (state) =>({
    partner: state.partner
})
export default connect(mapStateToProps, {getPartners})(Landing)

