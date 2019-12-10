import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MapComponent from './components/MapComponent';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Home from './pages/Home';
//import Chat from './components/Chat';
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

    const userLocation = this.state;

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
      {/*<Jumbotron />*/}

      {this.state.signupClicked && !this.state.joinClicked ? 
          <Signup userlat={this.state.userLat + (Math.random() * .11)} userlong={this.state.userLong + (Math.random() * .11)}
           getUserJoin={(e) => this.getUserJoin(e)}/>
            : null 
          }

        <Layout>
        </Layout>

    
   
      {/*<Router>
        <Switch>
          <Route exact strict path="/" component={ Home }/>
          <Route exact strict path="/signup" component={ Signup }/>
          <Route exact strict path="/about" component={ About } />
          <Route exact strict path="/contact" component={ Contact }/>
          <Route component={ NoMatch }/>
        </Switch>
      </Router>*/}
      <Footer />
      </React.Fragment>
      );
  }
}