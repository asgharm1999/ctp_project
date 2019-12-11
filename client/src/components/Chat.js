import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import MapComponent from './components/MapComponent';
// import Login from './components/Login';
// import Sign from './components/Signup';
// import Footer from './components/Footer';
// import UserBio from './components/UserBio';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import NoMatch from './pages/NoMatch';
// import { Layout } from './components/Layout';
// import { NavigationBar } from './components/NavigationBar';
// import { Jumbotron } from './components/Jumbotron';
import '../Chat.css';
import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';
import {
  handleInput,
  connectToChatkit,
  connectToRoom,
  sendMessage,
  sendDM,
} from '../methods';
import Dialog from './Dialog';
import RoomList from './RoomList';
import ChatSession from './ChatSession';
import RoomUsers from './RoomUsers';

export default class Chat extends Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      showLogin: true,
      isLoading: false,
      currentUser: null,
      currentRoom: null,
      rooms: [],
      roomUsers: [],
      roomName: null,
      messages: [],
      newMessage: '',
    };


    this.handleInput = handleInput.bind(this);
    this.connectToChatkit = connectToChatkit.bind(this);
    this.connectToChatkit = connectToChatkit.bind(this);
    this.connectToRoom = connectToRoom.bind(this);
    this.sendMessage = sendMessage.bind(this);
    this.sendDM = sendDM.bind(this);
  }

  render() {
    const {
      userId,
      showLogin,
      rooms,
      currentRoom,
      currentUser,
      messages,
      newMessage,
      roomUsers,
      roomName,
    } = this.state;

    return (
      <div className="Chat-Style Chat">
        <aside className="sidebar left-sidebar">
          {currentUser ? (
            <div className="user-profile">
              <span className="username">{currentUser.name}</span>
              <span className="user-id">{`@${currentUser.id}`}</span>
            </div>
          ) : null}

          {currentRoom ? (
            <RoomList
              rooms={rooms}
              currentRoom={currentRoom}
              connectToRoom={this.connectToRoom}
              currentUser={currentUser}
            />
          ) : null}
        </aside>
        <section className="chat-screen">
          <header className="chat-header">
            {currentRoom ? <h3>{roomName}</h3> : null}
          </header>
          <ul className="chat-messages">
            <ChatSession messages={messages} />
          </ul>
          <footer className="chat-footer">
            <form onSubmit={this.sendMessage} className="message-form">
              <input
                type="text"
                value={newMessage}
                name="newMessage"
                className="message-input"
                placeholder="Type your message and hit ENTER to send"
                onChange={this.handleInput}
              />
            </form>
          </footer>
        </section>
        <aside className="sidebar right-sidebar">
          {showLogin ? (
            <Dialog
              userId={userId}
              handleInput={this.handleInput}
              connectToChatkit={this.connectToChatkit}
            />
          ) : null}

          {currentRoom ? (
            <RoomUsers
              currentUser={currentUser}
              sendDM={this.sendDM}
              roomUsers={roomUsers}
            />
          ) : null}
        </aside>
      </div>
    );
  }
}