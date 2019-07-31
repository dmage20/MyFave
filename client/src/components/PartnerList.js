import React from 'react';
import { connect } from 'react-redux';
import PartnerItem from './PartnerItem';
// import selectExpenses from '../selectors/expenses';
// import ExpenseListFilters from './ExpenseListFilters';

export const PartnerList = ({partner:{ partners}}) => (
    <div className="content-container">
        <div className="list-header">
        </div>
        <div className="list-body">
        {
            partners.length === 0 ? (
                <div className="list-item list-item--message">
                <span>No Results</span>
              </div>
            ): (
                partners.map((partner) => {
                    // <ExpenseListFilters></ExpenseListFilters>
                   return <PartnerItem key={partner.company_id} {...partner}/>
                })
            )
        }
        </div>
    </div>
);

const mapStateToProps = (state) =>({
    partner: state.partner
})

export default connect(mapStateToProps)(PartnerList);


