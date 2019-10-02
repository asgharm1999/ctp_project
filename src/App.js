import React from 'react';
import Header from './homepage/Header.js';
import MapGlobal from './homepage/MapGlobal.js';
import Login from './homepage/Login.js';
import { Container, Row, Col } from 'reactstrap';
import "./App.css";


export default class App extends React.Component {
  render() {
      return (
      <Container full-width={true}>
      	<Row>
      		<Col>
      			<Header />
      		</Col>
      	</Row>
      	<Row>
      		<Col>
      			<Login />
      		</Col>
      	</Row>
      	<Row>
      		<Col>
      		   <MapGlobal />
			</Col>
      	</Row>
      </Container>
    );
  }
}

