import React, { Component } from 'react';

class EditorNavbar extends Component {
  state = {
    secondsElapsed: 0,
    laps: [],
  }

  componentDidMount() {
    this.interval();
  }

  interval = () => {
    setInterval( () =>
      this.setState({
        secondsElapsed: this.state.secondsElapsed + 1
      })
    , 1000);
  }

  formattedSeconds = (sec) => {
    return Math.floor(sec / 60) +
      ':' +
    ('0' + sec % 60).slice(-2)
  }

  logout = () => {
    console.log('logout buttonzzzz')
  }

  render() {
    return (
      <nav className="editor-navbar">
        <ul>
          
          <li>{this.formattedSeconds(this.state.secondsElapsed)}</li>
          <li>History</li>
          <li>Logout</li>
        </ul>
      </nav>
    );
  }
}
  

export default EditorNavbar;
