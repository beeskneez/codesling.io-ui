import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import io from 'socket.io-client/dist/socket.io.js';

import Button from '../globals/Button';
import Input from '../globals/forms/Input';

class Chat extends Component {
  constructor(){
    super();
    this.state = {
      // messages: [],
      message: ''
     }
  }

  componentDidMount() {
    console.log(localStorage);
    console.log(this.props);
  }

  handleMessageInput = (event) => {
    const { name, value } = event.target;
    this.setState ({ [name]: value });
  }

  sendMessage() {
    const { message } = this.state;
    const user = localStorage.email;
    if (message) {
      socket.emit('msg', {message: message, user: user});
    }
  }
  

  render() {
    return (
      <div>
        <div>This is the chat area. Meow.</div>
        <Input name="message" type="message" placeholder="Enter Trashtalk Here" onChange={this.handleMessageInput}/>
        <Button
            className="run-btn"
            text="Submit"
            backgroundColor="red"
            color="white"
            onClick={() => this.sendMessage()}
          />
      </div>
    );
  }
}

//css position fixed botton 0 px

export default Chat;