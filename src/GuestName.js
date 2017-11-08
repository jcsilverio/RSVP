import React from 'react';
import PropTypes from 'prop-types';



const Guest  = props => {
  if (props.isEditing) {
    return (
      <input type="text"
       value={props.children} />

      );
  }
  return (
    <span>
      {props.children}
    </span>
     );
};




 Guest.propTypes = {

    isEditing:PropTypes.bool.isRequired,

 }

export default Guest;