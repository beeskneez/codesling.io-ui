import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import io from 'socket.io-client/dist/socket.io.js';

import Button from '../globals/Button';
import Input from '../globals/forms/Input';

import './Chat.css';

class Chat extends Component {
  constructor(){
    super();
    this.state = {
      messages: [],
      message: ''
     }
  }

  componentDidMount() {
    this.props.socket.on('newmsg', (data) => {
      let messageArr = [data];
      this.setState ({
        messages: this.state.messages.concat(messageArr)
      })
    })
  }

  handleMessageInput = (event) => {
    const { name, value } = event.target;
    this.setState ({ [name]: value });
  }

  sendMessage() {
    const { message } = this.state;
    const user = localStorage.getItem("email");
    if (message) {
      this.props.socket.emit('msg', {message: message, user: user});
    }
  }
  

  render() {
    return (
      <div>
        <div className="chat-box">
          <div>{this.state.messages.map(message => 
            <div>{message.user}: {message.message}</div>)}</div>
        </div>
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