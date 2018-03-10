import React, { Component } from "react";
import axios from "axios";
import Logo from "../globals/Logo";
import Input from "../globals/forms/Input";
import Button from "../globals/Button/";
import { FriendsList } from "./FriendsList.jsx";

class Friends extends Component {
  state = {
    friends: [],
  }

  componentWillMount() {
    this.fetchFriends();
  }

  deleteFriend = async (e) => {
    const id = localStorage.getItem("id");
    const fid = e.id;
    const { data } = await axios.delete(
      `http://localhost:3396/api/friends/deleteFriend/${id}/${fid}`
    );
    this.fetchFriends();
  }

  addFriend = async () => {
    const id = localStorage.getItem("id");
    const username = this.state.friend;
    const {data} = await axios.get(`http://localhost:3396/api/users/fetchUsername/${username}`)
    const fid = data[0].id + "";
    const body = {
      user_id: id,
      friend_id: fid,
    }
    const added = await axios.post(`http://localhost:3396/api/friends/addFriend`, body)
  }

  handleFriendInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  fetchFriends = async () => {
    const id = localStorage.getItem("id");
    const {data} = await axios.get(
      `http://localhost:3396/api/friends/fetchAllFriends/${id}`
    );
    this.setState({ friends: data });
  };

  render() {
    return (
      <div className="landing-page-container">
        <Logo className="landing-page-logo" />
        <br />
        <h5>Friends:</h5>
        {this.state.friends.map((user, index) => (
          <FriendsList
            key={index}
            user={user}
            deleteFriend={this.deleteFriend.bind(this)}
          />
        ))}
        <br />
        <br />
        <Input name="friend" type="friend" placeholder="Add a friend" onChange={this.handleFriendInput} />
        <Button backgroundColor="red" color="white" text="Add" onClick={() => this.addFriend()} />
      </div>
    )
  }
}

export default Friends;
