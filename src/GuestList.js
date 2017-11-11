import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest';
import PendingGuest from './PendingGuest';

const GuestList  = props =>
  <ul>
  <PendingGuest
     name={props.pendingGuest}
     email={props.pendingEmail} />
    {props.guests
      .filter(guest => !props.isFiltered || guest.isConfirmed)
      .map((guest, index) =>
      <Guest
          key={index}
          name={guest.name}
          email={guest.email}
          isConfirmed={guest.isConfirmed}
          isEditing={guest.isEditing}
          handleConfirmation={() => props.toggleConfirmation(guest.id)}
          handleToggleEditing={() => props.toggleEditing(guest.id)}
          setName={text => props.setName(text, guest.id)}
          setEmail={text => props.setEmail(text, guest.id)}
          handleRemove={() => props.removeGuest(guest.id)} />
    )}
  </ul>;

 GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
    toggleConfirmation: PropTypes.func.isRequired,
    toggleEditing: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    setEmail: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    removeGuest: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
    pendingEmail: PropTypes.string.isRequired
 }

export default GuestList;