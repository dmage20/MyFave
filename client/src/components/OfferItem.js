import React from 'react';
// import {Link} from 'react-router-dom';

const OfferItem = (offer) => {
    return(
        <div className ="option">
            <h3>{offer.name}</h3> <span>Categoty: {offer.category_name}</span>
            <p className="option__text">
            Discounted from {offer.purchase_details.original_price} to {offer.purchase_details.discounted_price} - offer ends {offer.voucher_detail.end_datetime}
            </p>
            <p>{offer.description}</p>
        </div>
    );

}

export default OfferItem;