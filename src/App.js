import React, { Component } from 'react';
import './App.css';
import GuestList from './GuestList';
import Counter from './Counter';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    pendingEmail: "",
    guests: [
    {
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

    },
    ]
  };

  toggleGuestPropertyAt = (property, indexToChange) =>
    this.setState({
       guests: this.state.guests.map((guest,index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
       })
     });

    toggleConfirmationAt = index =>
      this.toggleGuestPropertyAt("isConfirmed", index);

    removeGuestAt = index =>
      this.setState({
        guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1)
        ]
      });

    toggleEditingAt = index =>
      this.toggleGuestPropertyAt("isEditing", index);

    setNameAt = (name, indexToChange) =>
    this.setState({
       guests: this.state.guests.map((guest,index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            name,

          };
        }
        return guest;
       })
     });

   setEmailAt = (email, indexToChange) =>
    this.setState({
       guests: this.state.guests.map((guest,index) => {
        if (index === indexToChange) {
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
    this.setState({
       guests: [
       {
        name: this.state.pendingGuest,
        email: this.state.pendingEmail,
        isConfirmed: false,
        isEditing: false
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
            <button type="submit" name="submit" value="submit">Add to Guest List</button>
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
             toggleConfirmationAt={this.toggleConfirmationAt}
             toggleEditingAt={this.toggleEditingAt}
             setNameAt={this.setNameAt}
             setEmailAt={this.setEmailAt}
             isFiltered={this.state.isFiltered}
             removeGuestAt={this.removeGuestAt}
             pendingGuest={this.state.pendingGuest}
             pendingEmail={this.state.pendingEmail}
              />
        </div>
      </div>
    );
  }
}

export default App;
