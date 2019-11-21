import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MapComponent from './components/MapComponent';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import './App.css';




export default class App extends React.Component {
  render() {
    return(
      <React.Fragment>
      <NavigationBar />
      <MapComponent />
      <Jumbotron />
      <Layout>
        <Router>
          <Switch>
             <Route exact path="/" component={ Home }/>
              <Route path="/about" component={ About }/>
              <Route path="/contact" component={ Contact }/>
              <Route component={ NoMatch }/>
          </Switch>
        </Router>
      </Layout>
      </React.Fragment>
      );
  }
}
