import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import earthImage from '../assets/earth-globe.svg';
import auth from '../services/auth';



const FontSize = styled.header`
	font-size: 1rem;
`;


export default class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isAuthenticated: false,
      failed: false, 
      email: '',
			password: '',
      signUpClicked: false,
      joinClicked: false,
      userJoined: false
		}
	}

  findUserLogInStatus() {
    this.props.getUserStatus(this.state.isAuthenticated);
  }

  findUserClickStatus(clickStatus) {
    this.props.getUserClick(clickStatus);
    
    this.setState({
      signUpClicked: clickStatus
    })
  }

  findUserJoin() {
    this.setState({
      userJoined: true
    })
  }

  handleSubmit = (event) => {


  	event.preventDefault();
  	let { email, password } = this.state;
    auth.authenticate(email, password)
        .then((user) => {
          if(user) {
         
          this.setState({ 
            isAuthenticated: true,
            failed: false
          });


          this.findUserLogInStatus();

          }
          
        })
        .catch((err) => {
          if(err) {
          console.log('This is err: ' , err);
          this.setState({ 
            failed: true,
            isAuthenticated: false
          });

          }
          
        });

        this.findUserLogInStatus();

    }

  handleSignOut = (event) => {
    
    auth.signout(event)
    .then((event) => {
        this.setState({
        isAuthenticated: false,
        signUpClicked: false
      });

      this.findUserLogInStatus();

    })


  }


  handleInputChange = (event) => {
  	this.setState({
  			[event.target.name]: event.target.value
  	})

  }


render() {
	
  return(
		<div>

		{/* Card style is in App.css*/}

      {!this.state.isAuthenticated && !this.state.signUpClicked || this.props.userjoin && !this.state.isAuthenticated ? (
        <Card className={this.state.failed ? "login-form-failed" : "login-form"} >
          <Card.Body>
          <Container>
            <Row className="login-margin">
                <Col sm={9}>
                <Card.Title className="login-text">Welcome to Global-Port</Card.Title>
                </Col>
                <Col sm={3}>
                    <img className="navbar-image"
                    alt="Test"
                    src={earthImage}
                    width="40px"
                    height="40px"
                    href="/"
                />
                </Col>

              </Row>
            </Container>
            <Card.Text>
              Connect with fellow travelers and explore the world!
            </Card.Text>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address:</Form.Label>
                  <Form.Control
                    onChange={(e) => this.handleInputChange(e)} 
                    size="sm"
                    type="email" 
                    name="email"
                    placeholder="Enter email"
                   />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control 
                    onChange={(e) => this.handleInputChange(e)}
                    size="sm"
                    type="password" 
                    name="password"
                    placeholder="Password" />
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>

                <Container>
                	<Row>
	                	<Col> 
                    <Button 
                    type="submit" 
                    variant="info"
                    onClick={(e) => this.handleSubmit(e)}>
                    <FontSize>Log in</FontSize>
                    </Button>
                    </Col>

	    				       
                    <Col> 
                    <Button 
                    type="button" 
                    variant="info"
                    onClick={(e) => this.findUserClickStatus(e)}>
                    <FontSize>Sign up</FontSize>
                    </Button>
                    </Col>
            
            
                	</Row>
                </Container>

                {this.state.failed ? 
                  <Container>
                    <Row>
                      <Col>
                        <div className="alert alert-danger alert-button" role="alert">Log in Failed</div>
                      </Col>
                    </Row>
                  </Container>
                  : null


                }

              </Form>
          </Card.Body>

        </Card> ) : (
        
          null

      )} 

        {this.state.isAuthenticated ? 
          <div>
            <Button className="chatroom" variant="info" type="submit" onClick={() => window.open("http://localhost:3000/chatroom", "_blank")}> Go to chatroom </Button>
            <Button className="signout" variant="info" type="submit" onClick={(e) => this.handleSignOut(e)}> Sign out </Button>
          </div>
          : null}

          
		</div>
		);
	}
}