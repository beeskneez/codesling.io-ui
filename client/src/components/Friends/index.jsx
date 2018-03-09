import React, { Component } from "react";
import axios from "axios";
import Logo from "../globals/Logo";
import { FriendsList } from "./FriendsList.jsx";

class Friends extends Component {
  state = {
    friends: [],
  };

  async componentWillMount() {
    const id = localStorage.getItem("id");
    const { data } = await axios.get(`http://localhost:3396/api/friends/fetchAllFriends/${id}`);
    this.setState({ friends: data });
    console.log(this.state.friends);

  }
  
  deleteFriend(e) {
    
  }

  addFriend(e) {

  }

  fetchFriends = async () => {
    const id = localStorage.getItem("id");
    const { data } = await axios.get(`http://localhost:3396/api/friends/fetchAllFriends/${id}`);
    this.setState({ friends: data });
  }

  render() {
    
    return (
      <div className="landing-page-container">
        <Logo className="landing-page-logo" />
        <br />
        <h5>Friends:</h5>
        {this.state.friends.map((user) => 
          <div>{user.username}</div>
        )}
      </div>
    )
  }
}

export default Friends;

        // <FriendsList friends={this.state.friends} deleteFriend={() => this.deleteFriend} />;


      //  {
      //    this.state.friends.map(user => {
      //      <div>{user.username}</div>;
      //    });
      //  }