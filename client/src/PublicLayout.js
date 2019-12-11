import React from 'react';
import MapComponent from './components/MapComponent';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';

import { NavigationBar } from './components/NavigationBar';
import './App.css';



export default class PublicLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: false,
      userLat: null,
      userLong: null,
      userName: '',
      signupClicked: false,
      joinClicked: false,
    }
  }

 //Finds if user is logged in | passed down to login component: App.js -> Home.js -> Login.js
  getUserStatus(userStatus) {
      this.setState({
        isUserLoggedIn: userStatus
      }) 
  }

  getUserClick(clickStatus) {
      this.setState({
        signupClicked: clickStatus
      }) 
  }

  getUserName(userName) {
      this.setState({
        userName: userName
      }) 
  }

  getUserLocation(location) {
      this.setState({
        userLat: location.coords.latitude,
        userLong: location.coords.longitude
      }) 
  }

  getUserJoin(userJoin) {
    this.setState({
      joinClicked: userJoin
    })
  }


  render() {

    return(
      <React.Fragment>
      <NavigationBar />
     
      <MapComponent 
        userstatus={this.state.isUserLoggedIn}  
        getUserLocation={(e) => this.getUserLocation(e)} />
      <Login 
        userjoin={this.state.joinClicked}
        getUserStatus={(e) => this.getUserStatus(e)}
        getUserClick={(e) => this.getUserClick(e)} />


      {this.state.signupClicked && !this.state.joinClicked ? 
          <Signup userlat={this.state.userLat + (Math.random() * .11)} userlong={this.state.userLong + (Math.random() * .11)}
           getUserJoin={(e) => this.getUserJoin(e)}/>
            : null 
          }

      <Footer />
      </React.Fragment>
      );
  }
}
