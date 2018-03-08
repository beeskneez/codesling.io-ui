import React, { Component } from "react";
import axios from "axios";
import Logo from "../globals/Logo";

class Friends extends Component {
  state = {
    friends: [],
  }
  
  deleteFriend(e) {

  }

  addFriend(e) {

  }
  
  render() {
    return(
      <div className="landing-page-container">
        <Logo className="landing-page-logo" />
        <br />
        <h5>Friends:</h5>
      </div>
    )
  }
}

export default Friends;
