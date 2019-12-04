import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MapComponent from './components/MapComponent';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import './App.css';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: false,
      userLat: null,
      userLong: null
    }
  }

 //Finds if user is logged in | passed down to login component: App.js -> Home.js -> Login.js
  getUserStatus(status) {
      this.setState({
        isUserLoggedIn: status
      }) 
  }

  getUserLocation(location) {
      this.setState({
        userLat: location.coords.latitude,
        userLong: location.coords.longitude
      }) 
  }


  render() {

    const userLocation = this.state;

    return(
      <React.Fragment>
      <NavigationBar />
      <MapComponent 
        userstatus={this.state.isUserLoggedIn}  
        getUserLocation={(e) => this.getUserLocation(e)} />
      <Login 
        getUserStatus={(e) => this.getUserStatus(e)} />
      <Jumbotron />
      <Layout>
        <Home />
        <Signup userlat={this.state.userLat} userlong={this.state.userLong}/>
      </Layout>
      <Footer />
      </React.Fragment>
      );
  }
}
