import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    window.localStorage.clear()
  }

  render() {
    return (
      <nav className="editor-navbar">
        <ul>
          <a>
          <li>{this.formattedSeconds(this.state.secondsElapsed)}</li>
          </a>
          <Link to='/history'>
            <li>History</li>
          </Link>
          <Link to='/'>
            <li onClick={this.logout}>Logout</li>
          </Link>
        </ul>
      </nav>
    );
  }
}
  

export default EditorNavbar;
