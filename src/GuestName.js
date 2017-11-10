import React from 'react';
import PropTypes from 'prop-types';



const GuestName  = props => {
  if (props.isEditing) {
    return (
      <div>
      <input type="text"
       value={props.name}
       onChange={props.handleNameEdits} />
      <input type="text"
        placeholder="Enter email address" />
        </div>

      );
  }
  return (
    <div>
    <span>
      {props.name}
    </span>
    <span className="email"> props.something email goes here
    </span>
    </div>
     );

};




 GuestName.propTypes = {

    isEditing:PropTypes.bool.isRequired,
    handleNameEdits: PropTypes.func.isRequired

 }

export default GuestName;