import React from 'react';
import PropTypes from 'prop-types';



const GuestName  = props => {
  if (props.isEditing) {
    return (
      <div>
      <input type="text"
       value={props.children[0]}
       onChange={props.handleNameEdits} />

      <input type="text"
          value={props.children[1]}
       onChange={props.handleEmailEdits}  />
        </div>

      );
  }
     return (
      <div>
         <span>
             {props.children[0] || "[Add guest name]"}
         </span>

         <span className="email">
             {props.children[1] || "[Add guest email]"}
         </span>
     </div>
     );

};




 GuestName.propTypes = {

    isEditing:PropTypes.bool.isRequired,
    handleNameEdits: PropTypes.func.isRequired,
    handleEmailEdits: PropTypes.func.isRequired

 }

export default GuestName;