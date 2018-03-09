import React, { Component } from "react";
import axios from "axios";
import Logo from "../globals/Logo";
import { FriendsList } from "./FriendsList.jsx";

class Friends extends Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.fetchFriends();
  }
  
  deleteFriend(e) {
    
  }

  addFriend(e) {

  }

  fetchFriends = async () => {
    const id = localStorage.getItem("id");
    console.log('our id', id)
    const { data } = await axios.get(`http://localhost:3396/api/friends/fetchAllFriends/${id}`);
    console.log('within fetchFriends', data)
    this.setState({ friends: data.rows });
    console.log(this.state.friends)
  }

  render() {
    const list = this.state.friends.length ? (
      <div>
      {this.state.friends.map(user => {
        <div>{user.username}</div>
      })}
      </div>
    ) : (
      <div>fail</div>
    );

    return(
      <div className="landing-page-container">
        <Logo className="landing-page-logo" />
        <br />
        <h5>Friends:</h5>
        {list}
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