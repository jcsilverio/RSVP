import React from 'react';
import PropTypes from 'prop-types';



const GuestName  = props => {
  if (props.isEditing) {
    return (
      <div>
      <input type="text"
       value={props.children}
       onChange={props.handleNameEdits} />
      <input type="text"
        placeholder="Enter email" />
        </div>

      );
  }
  return (
    <span>
      {props.children}
    </span>
     );

};




 GuestName.propTypes = {

    isEditing:PropTypes.bool.isRequired,
    handleNameEdits: PropTypes.func.isRequired

 }

export default GuestName;