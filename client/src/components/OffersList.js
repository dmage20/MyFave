import React from 'react';
import { connect } from 'react-redux';
import OfferItem from './OfferItem';
// import selectExpenses from '../selectors/expenses';
// import ExpenseListFilters from './ExpenseListFilters';

export const OffersList = ({offer:{ partner, offers}}) => (
    <div className="content-container">
        <h2>{partner.name}</h2>
        <p>{partner.description} - {partner.category}</p>
        <div className="list-header">
        </div>
        <div className="list-body">
        {
            offers.length === 0 ? (
                <div className="list-item list-item--message">
                <span>No Results</span>
              </div>
            ): (
                offers.map((offer) => {
                    // <ExpenseListFilters></ExpenseListFilters>
                   return <OfferItem key={offer._id} {...offer}/>
                })
            )
        }
        </div>
    </div>
);

const mapStateToProps = (state) =>({
    offer: state.offer
})

export default connect(mapStateToProps)(OffersList);


