import React from 'react';
import {Link} from 'react-router-dom';

// import {Link} from 'react-router-dom';

const PartnerItem = ({name, email, _id, fave_average_rating, category, website, description}) => {
    return(
        <div className ="option">
            <Link className="list-item" to={`/offers/${_id}`}>
                <h3>{name}</h3> 
            </Link>
            <span>Categoty: {category}</span>
            <p className="option__text">{description}</p>
            
        </div>
    );

}

export default PartnerItem;