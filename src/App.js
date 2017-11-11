import React, { Component } from 'react';

import GuestList from './GuestList';
import Counter from './Counter';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    pendingEmail: "",
    guests: [    {
      name: 'Leeroy Jenkins',
       email: 'leeroy@leeroy.com',
       isConfirmed: false,
       isEditing: false,
     },
     {
       name: 'Chuck Norris',
       email: 'chuck@chuck.com',
       isConfirmed: true,
       isEditing: false,

     },
    {
       name: 'Olenna Tyrell',
       email: 'olenna@boss.com',
       isConfirmed: false,
       isEditing: true,

     },]
  };

  lastGuestId = 0;

  newGuestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId += 1;
    return id;
  };

  toggleGuestProperty = (property, id) =>
    this.setState({
       guests: this.state.guests.map(guest => {
        if (id === guest.id) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
       })
     });

    toggleConfirmation = id =>
      this.toggleGuestProperty("isConfirmed", id);

    removeGuest = id =>
    this.setState({
      guests: this.state.guests.filter(guest => id !== guest.id)
    });

    toggleEditing = id =>
      this.toggleGuestProperty("isEditing", id);

    setName = (name, id) =>
    this.setState({
      guests: this.state.guests.map(guest => {
        if (id === guest.id) {
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
    });

   setEmail= (email, id) =>
    this.setState({
      guests: this.state.guests.map(guest => {
        if (id === guest.id) {
          return {
            ...guest,
            email,

          };
        }
        return guest;
       })
     });

  toggleFilter = () =>
     this.setState({ isFiltered: !this.state.isFiltered });

  handleNameInput = e =>
  this.setState({ pendingGuest: e.target.value });

  handleEmailInput = e =>
  this.setState({ pendingEmail: e.target.value });

  newGuestSubmitHandler = e => {
    e.preventDefault();
    const id = this.newGuestId();
    this.setState({
       guests: [
       {
        name: this.state.pendingGuest,
        email: this.state.pendingEmail,
        isConfirmed: false,
        isEditing: false,
        id
        },
        ...this.state.guests
       ],
       pendingGuest: '',
       pendingEmail: ''
     })
  }

  getTotalInvited = () => this.state.guests.length;

  getAttendingGuests = () =>
      this.state.guests.reduce(
        (total, guest) => guest.isConfirmed ? total + 1 : total,
        0
      );



  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;

    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>Plan Your Event</p>
          <form onSubmit={this.newGuestSubmitHandler}>
          <div>
          <span className="instruction"> Invite Someone... </span>
            <input
               type="text"
               onChange={this.handleNameInput}
               value={this.state.pendingGuest}
               placeholder="Name"
                />
            <input
               type="text"
               onChange={this.handleEmailInput}
               value={this.state.pendingEmail}
               placeholder="Email Address"
                />
            <button type="submit" className="submitButton" name="submit" value="submit">Add to Guest List</button>
            </div>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input
                type="checkbox"
                onChange={this.toggleFilter}
                checked={this.state.isFiltered} /> Hide those who haven't responded
              </label>
          </div>
          <Counter
              totalInvited={totalInvited}
              numberAttending={numberAttending}
              numberUnconfirmed={numberUnconfirmed} />

          <GuestList
             guests={this.state.guests}
             toggleConfirmation={this.toggleConfirmation}
             toggleEditing={this.toggleEditing}
             setName={this.setName}
             setEmail={this.setEmail}
             isFiltered={this.state.isFiltered}
             removeGuest={this.removeGuest}
             pendingGuest={this.state.pendingGuest}
             pendingEmail={this.state.pendingEmail}
              />

        </div>
        <div className="footer">
           <p>made by <a href="https://github.com/jcsilverio" target="_blank">me</a> © 2017.</p>
        </div>
      </div>
    );
  }
}

export default App;
