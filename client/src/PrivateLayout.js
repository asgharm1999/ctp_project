import React from 'react';

import Chat from './components/Chat';
import { NavigationBar } from './components/NavigationBar';


export default class PrivateLayout extends React.Component {

  render() {

    return(
      <React.Fragment>

      <NavigationBar />
      <Chat /> 

      </React.Fragment>
      );
  }
}



// export default App;