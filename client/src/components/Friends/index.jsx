import React, { Component } from "react";
import axios from "axios";
import Logo from "../globals/Logo";
import Input from "../globals/forms/Input";
import Button from "../globals/Button/";
import { FriendsList } from "./FriendsList.jsx";

class Friends extends Component {
  state = {
    friends: []
  };

  async componentWillMount() {
    const id = localStorage.getItem("id");
    const { data } = await axios.get(
      `http://localhost:3396/api/friends/fetchAllFriends/${id}`
    );
    this.setState({ friends: data });
  }

  deleteFriend(e) {
    console.log(e)
  }

  addFriend(e) {
    console.log(this.state.friend)
  }

  handleFriendInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return <div className="landing-page-container">
        <Logo className="landing-page-logo" />
        <br />
        <h5>Friends:</h5>
        <FriendsList friends={this.state.friends} deleteFriend={() => this.deleteFriend} />
        
        {this.state.friends.map((user, index) => <div>
            <div key={index} name={user.user_id}>
              {user.username}
            </div>
            <a onClick={e => this.deleteFriend(this.props.name)}>
              {" "}
              Remove{" "}
            </a>
          </div>)}
        <br />
        <br />
        <Input name="friend" type="friend" placeholder="Add a friend" onChange={this.handleFriendInput} />
        <Button backgroundColor="red" color="white" text="Add" onClick={e => this.addFriend(e)} />
      </div>;
  }
}

export default Friends;

        // <FriendsList friends={this.state.friends} deleteFriend={() => this.deleteFriend} />;


      //  {
      //    this.state.friends.map(user => {
      //      <div>{user.username}</div>;
      //    });
      //  }