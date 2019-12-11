import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NoMatch from './pages/NoMatch';
import PublicLayout from './pages/PublicLayout';
import PrivateLayout from './pages/PrivateLayout';


export default class App extends React.Component {


  render() {

    return(
      <React.Fragment>
  
      <Router>
        <Switch>
          <Route exact strict path="/" component={ PublicLayout }/>
          <Route exact strict path="/chatroom" component={ PrivateLayout }/>
          <Route component={ NoMatch }/>
        </Switch>
      </Router>

      </React.Fragment>
      );
  }
}



// export default App;