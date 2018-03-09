import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import io from 'socket.io-client/dist/socket.io.js';

class Chat extends Component {
  state = {
    messages: []
   }

  
  render() {
    return (
      <div>
        This is the chat
      </div>
    );
  }
}

export default Chat;