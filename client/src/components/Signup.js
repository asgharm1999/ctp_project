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
<<<<<<< HEAD
			name: '',
			email: '',
			confirmEmail: '',
			password: '',
			confirmPassword: '',
			user_name: '',
			id: null,
			created_on: null

		}
	}
	
=======
			firstName: '',
			lastName: '',
			longitude: null,
			latitude: null,
			email: '',
			password: '',
			sucesss: false,
			error: false

		}
	}

	//test adding using
	// add if email == confirmEmail check
>>>>>>> asghar

	handleSubmit = (event) => {
		event.preventDefault();

		const data = this.state;
<<<<<<< HEAD
		console.log('Log in data is: ', data);

	}
=======
		console.log("inside handleSubmit");
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
	      });
			console.log('Log in data is: ', data);

		}

>>>>>>> asghar

	handleInputChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})


	}

	// function validateForm() {
	// 	return (
	// 		fields.name.length > 0 &&
	// 		fields.email.length > 0 &&
	// 		fields.confirmEmail.length > 0 &&
	// 		fields.password.length > 0 &&
	// 		fields.password === fields.confirmPassword
	// 	);
	// }

	// function validateConfirmationForm() {
	// 	return fields.confirmationCode.length > 0;
	// }

	// async function handleSubmit(event) {
	// 	event.preventDefault();
	// 	setIsLoading(true);
	// 	setNewUser("test");
	// 	setIsLoadin(false);
	// }

	// async function handleConfirmationSubmit(event) {
	// 	event.preventDefault();
	// 	setIsLoading(true);
	// }

	// function renderConfirmationForm() {
	// 	return (
	// 	  <form onSubmit={handleConfirmationSubmit}>
	// 		<FormGroup controlId="confirmationCode" bsSize="large">
	// 		  <ControlLabel>Confirmation Code</ControlLabel>
	// 		  <FormControl
	// 			autoFocus
	// 			type="tel"
	// 			onChange={handleFieldChange}
	// 			value={fields.confirmationCode}
	// 		  />
	// 		  <HelpBlock>Please check your email for the code.</HelpBlock>
	// 		</FormGroup>
	// 		<LoaderButton
	// 		  block
	// 		  type="submit"
	// 		  bsSize="large"
	// 		  isLoading={isLoading}
	// 		  disabled={!validateConfirmationForm()}
	// 		>
	// 		  Verify
	// 		</LoaderButton>
	// 	  </form>
	// 	);
	// }

	render() {
<<<<<<< HEAD
		const {name, email, confirmEmail, password, confirmPassword} = this.state;
=======
		const {firstName, lastName, email, confirmEmail, password, confirmPassword,
			longitude, latitude} = this.state;
>>>>>>> asghar
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
							<Form.Group controlId="formGroupName">
<<<<<<< HEAD
			    			<Form.Label>Enter your name</Form.Label>
						    <Form.Control 
							    type="name" 
							    placeholder="Enter full name" 
							    name="name" 
=======
			    			<Form.Label>Enter your first name {firstName}</Form.Label>
						    <Form.Control 
							    type="text" 
							    placeholder="Enter last name" 
							    name="firstName" 
							    onChange={(e) => this.handleInputChange(e)} />
						  </Form.Group>
						 </Col>

						 <Col>
							<Form.Group controlId="formGroupName">
			    			<Form.Label>Enter your last name {lastName}</Form.Label>
						    <Form.Control 
							    type="text" 
							    placeholder="Enter lasr name" 
							    name="lastName" 
>>>>>>> asghar
							    onChange={(e) => this.handleInputChange(e)} />
						  </Form.Group>
						 </Col>
			 		</Row>
			 
			 		<Row>
			 			<Col>
						  <Form.Group controlId="formGroupEmail">
<<<<<<< HEAD
						    <Form.Label>Enter your email</Form.Label>
=======
						    <Form.Label>Enter your email {email}</Form.Label>
>>>>>>> asghar
						    <Form.Control 
							    type="email" 
							    placeholder="Enter email" 
							    name="email" 
							    onChange={(e) => this.handleInputChange(e)} />
						  </Form.Group>
						 </Col>
						 <Col>
						  <Form.Group controlId="formGroupEmailConfirm">
<<<<<<< HEAD
						    <Form.Label>Confirm email</Form.Label>
						    <Form.Control 
							    type="confimEmail" 
=======
						    <Form.Label>Confirm email {email}</Form.Label>
						    <Form.Control 
							    type="email" 
>>>>>>> asghar
							    placeholder="Confirm your email" 
							    name="comfirmEmail" 
							    onChange={(e) => this.handleInputChange(e)} />
						  </Form.Group>
						  </Col>
			  		</Row>
			  		<Row>
			  			<Col>
						  <Form.Group controlId="formGroupPassword">
<<<<<<< HEAD
						    <Form.Label>Enter your password</Form.Label>
=======
						    <Form.Label>Enter your password {password}</Form.Label>
>>>>>>> asghar
						    <Form.Control 
							    type="password" 
							    placeholder="Password" 
							    name="password" 
							    onChange={(e) => this.handleInputChange(e)}/>
						  </Form.Group>
						 </Col>
						  <Col>
						  <Form.Group controlId="formGroupPasswordConfirm">
<<<<<<< HEAD
						    <Form.Label>Confirm your password</Form.Label>
						    <Form.Control 
							    type="confirmPassword" 
=======
						    <Form.Label>Confirm your password {password}</Form.Label>
						    <Form.Control 
							    type="password" 
>>>>>>> asghar
							    placeholder="Confirm your password" 
							    name="confirmPassword" 
							    onChange={(e) => this.handleInputChange(e)}/>
						  </Form.Group>
						 </Col>
			  		</Row>
<<<<<<< HEAD
			  
			  		<Row>
			  			<Col>
						  <Button variant="info" type="submit">
=======
			  		<Row>

			  		  <Col>
						  <Form.Group controlId="formGroupPasswordConfirm">
						    <Form.Label>latitude {latitude}</Form.Label>
						    <Form.Control 
							 	type="text" 
							    placeholder="longitude" 
							    name="latitude" 
							    onChange={(e) => this.handleInputChange(e)}/>
						  </Form.Group>
						 </Col>

			  			<Col>
						  <Form.Group controlId="formGroupPassword">
						    <Form.Label>longitude {longitude}</Form.Label>
						    <Form.Control 
							    type="text" 
							    placeholder="longitude" 
							    name="longitude" 
							    onChange={(e) => this.handleInputChange(e)}/>
						  </Form.Group>
						 </Col>
					
			  		</Row>
			  
			  		<Row>
			  			<Col>
						  <Button variant="info" type="submit" onClick={(e) => this.handleSubmit(e)}>
>>>>>>> asghar
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