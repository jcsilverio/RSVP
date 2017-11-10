import React from 'react';
import PropTypes from 'prop-types';


const PendingGuest  = props =>{
  if(props.name) {
    return (
      <li className="pending">
      <span>
          {props.name}
      </span>
      <span className="email">
        {props.email}
      </span>

    </li>
     );
   }
   return null;
  };



 PendingGuest.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
 }

export default PendingGuest;