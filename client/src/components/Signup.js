import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const SignUp_Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items:center;
	height: 60vh;
`;


export default class SignUp extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			longitude: null,
			latitude: null,
			email: '',
			confirmEmail: '',
			password: '',
			confirmPassword: '',
			sucesss: false,
			error: false

		}
	}

	//test adding using
	// add if email == confirmEmail check

	handleSubmit = (event) => {
		event.preventDefault();

		console.log(event);

		const data = this.state;

		fetch("/api/auth/signup", {
	      method: 'POST',
	      credentials: 'include',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      body: JSON.stringify(
	      	{firstName: data.firstName,
	      	lastName: data.lastName,
	      	latitude: parseFloat(data.latitude),
	      	longitude: parseFloat(data.longitude),
	      	email: data.email,
	      	password: data.password,
	      	}),
	    })
	      .then(res => {
	        if(res.ok) {
	          return res.json()
	        }

	        throw new Error('Content validation');
	      })
	      .then(post => {
	        this.setState({
	          success: true,
	        });
	      })
	      .catch(err => {
	        this.setState({
	          error: true,
	        });

	        console.log(err);
	      });
			console.log('Log in data is: ', data);

	
		}


	handleInputChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})


	}


	render() {
		const {firstName, lastName, email, confirmEmail, password, confirmPassword,
			longitude, latitude} = this.state;

			const userLat = this.props.userlat;
			const userLong = this.props.userlong;
		return(
			//Card style is in App.css
			<SignUp_Wrapper>
			<Card className="signup-form" bg="dark" text="white" style={{ width: '50rem' }}>
			<Card.Body>
            	<Card.Title>Sign up below!</Card.Title>
            	<Card.Text>
             	 Join our vibrant community of travelers.
            	</Card.Text>
			<Container>
			
				<Form onSubmit={(e) => this.handleSubmit(e)} className="formCentered">
					<Row>
						<Col>
							<Form.Group controlId="formGroupName1">
			    			<Form.Label>Enter your first name {firstName}</Form.Label>
						    <Form.Control 
							    type="text" 
							    placeholder="Enter last name" 
							    name="firstName" 
							    onChange={(e) => this.handleInputChange(e)} />
						  </Form.Group>
						 </Col>

						 <Col>
							<Form.Group controlId="formGroupName2">
			    			<Form.Label>Enter your last name {lastName}</Form.Label>
						    <Form.Control 
							    type="text" 
							    placeholder="Enter lasr name" 
							    name="lastName" 
							    onChange={(e) => this.handleInputChange(e)} />
						  </Form.Group>
						 </Col>
			 		</Row>
			 
			 		<Row>
			 			<Col>
						  <Form.Group controlId="formGroupEmail">
						    <Form.Label>Enter your email {email}</Form.Label>
						    <Form.Control 
							    type="email" 
							    placeholder="Enter email" 
							    name="email" 
							    onChange={(e) => this.handleInputChange(e)} />
						  </Form.Group>
						 </Col>

						 <Col>
						  <Form.Group controlId="formGroupPassword">
						    <Form.Label>Enter your password {password}</Form.Label>
						    <Form.Control 
							    type="password" 
							    placeholder="Password" 
							    name="password" 
							    onChange={(e) => this.handleInputChange(e)}/>
						  </Form.Group>
						 </Col>
					
			  		</Row>
			
			  		<Row>

			  		  <Col>
						 	<Form.Group >
						    <Form.Label>Your Latitude</Form.Label>
						      <Form.Control type="text" readOnly defaultValue={userLat} />
						   </Form.Group>
						 </Col>

			  			<Col>
							<Form.Group >
						    <Form.Label>Your Longitude</Form.Label>
						      <Form.Control type="text" readOnly defaultValue={userLong} />
						   </Form.Group>
			
						 </Col>
					
			  		</Row>
			  
			  		<Row>
			  			<Col>
						  <Button variant="info" type="submit" onClick={(e) => this.handleSubmit(e)}>
						  Join</Button>
					  	</Col>
					 </Row>
				</Form>
			</Container>
		</Card.Body>
        </Card>
        </SignUp_Wrapper>


		);
	}
}