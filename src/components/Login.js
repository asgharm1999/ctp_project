import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';


const FontSize = styled.header`
	font-size: 1rem;
`;

const ButtonWidth = styled.div`
	width: 10px;
`;


export default class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}
	

handleSubmit = (event) => {
	event.preventDefault();
	const data = this.state;
	console.log('Log in data is: ', data);

}

handleInputChange = (event) => {
	this.setState({
			[event.target.name]: event.target.value
	})

}


render() {
	const {email, password} = this.state;
	return(
		<div>
		{/* Card style is in App.css*/}
        <Card className="login-form" style={{ width: '17rem' }}>
          <Card.Body>
            <Card.Title>Welcome to Global-Port</Card.Title>
            <Card.Text>
              Connect with fellow travelers and explore the world!
            </Card.Text>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
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
                  <Form.Label>Password</Form.Label>
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
                    variant="info">
                    <FontSize>Log in</FontSize>
                    </Button>
                    </Col>
	    				       
                    <Col> 
                    <Button type="button" 
                    variant="info">
                    <FontSize>Sign up</FontSize>
                    </Button>
                    </Col>
                	</Row>
                </Container>
             
              </Form>
            
          </Card.Body>
        </Card>
		</div>
		);
	}
}