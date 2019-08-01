import React from 'react';
import {Link} from 'react-router-dom';

// import {Link} from 'react-router-dom';

const PartnerItem = ({name, email, fave_average_rating, category, website, description}) => {
    return(
        <div className ="option">

            <h3>{name}</h3> <span>Categoty: {category}</span>

            <p className="option__text">{description}</p>
            
        </div>
    );

}

export default PartnerItem;