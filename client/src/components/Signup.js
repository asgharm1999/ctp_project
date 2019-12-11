import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const initialState = {
	firstName: '',
	firstNameError: '',
	lastName: '',
	lastNameError: '',
	longitude: null,
	latitude: null,
	email: '',
	emailError: '',
	password: '',
	passwordError: '',
	sucesss: false,
	error: false
}


export default class SignUp extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			firstName: '',
			firstNameError: '',
			lastName: '',
			lastNameError: '',
			longitude: null,
			latitude: null,
			email: '',
			emailError: '',
			password: '',
			passwordError: '',
            message: '',
            messageError: '',
            recommendation: '',
            traveledTo: '',
            wishListCities: '',
			sucesss: false,
			error: false,
			joinClicked: false

		}
	}

	validate = () => {
		let firstNameError = '';
		let lastNameError = '';
		let emailError = '';
		let passwordError = '';

		if (!this.state.firstName) {
			firstNameError = "First name cannot be blank";
		}

		if (!this.state.lastName) {
			lastNameError = "Last name cannot be blank";
		}

		if (!this.state.email.includes('@')) {
			emailError = 'Invalid Email';
		}

		if (emailError || firstNameError || lastNameError) {
			this.setState({
				emailError, firstNameError, lastNameError
			});
			return false;
		}
		return true;

	}

	
	// add if email == confirmEmail check

	handleSubmit = (event) => {

		event.preventDefault();

		const isValid = this.validate();
		if (isValid) {


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
	      	latitude: parseFloat(this.props.userlat),
	      	longitude: parseFloat(this.props.userlong),
	      	email: data.email,
	      	password: data.password,
	      	message: data.message,
			recommendation: data.recommendation,
			traveledTo: data.traveledTo,
			wishListCities: data.wishListCities,
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
	        this.findUserJoinStatus(post);
	      })
	      .catch(err => {
	        this.setState({
	          error: true,
	        });

	        console.log(err);
	      });
	      	
			console.log('Log in data is: ', data);
			this.setState(initialState);

			 
		}
	
	}

	  findUserJoinStatus(joinStatus) {
	    this.props.getUserJoin(joinStatus);
	    
	    this.setState({
	      joinClicked: true
	    })
  }



	handleInputChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})

	}


	render() {

			const userLat = this.props.userlat;
			const userLong = this.props.userlong;
		return(
			//Card style is in App.css
		<div className="signup-form">
			<Card bg="dark" text="white">
			<Card.Body>
			<Container>
				<Row >
					<Col>
            	<Card.Title>Join our vibrant community of travelers</Card.Title>
            		</Col>
            	</Row>
            </Container>
            	
			<Container>
			
				<Form onSubmit={(e) => this.handleSubmit(e)} className="formCentered">
					<Row>
						<Col>
							<Form.Group controlId="formGroupFirstName">
			    			<Form.Label>Enter your first name:</Form.Label>
						    <Form.Control 
							    type="text" 
							    placeholder="First name" 
							    name="firstName" 
							    value={this.state.firstName}
							    onChange={(e) => this.handleInputChange(e)} />
						  </Form.Group>
						  <Form.Text className="error-text">{this.state.firstNameError}</Form.Text>
						 </Col>

						 <Col>
							<Form.Group controlId="formGroupLastName">
			    			<Form.Label>Enter your last name:</Form.Label>
						    <Form.Control 
							    type="text" 
							    placeholder="Last name" 
							    name="lastName" 
							    value={this.state.lastName}
							    onChange={(e) => this.handleInputChange(e)} />
						  </Form.Group>
						   <Form.Text className="error-text">{this.state.lastNameError}</Form.Text>
						 </Col>
			 		</Row>
			 
			 		<Row>
			 			<Col>
						  <Form.Group controlId="formGroupEmail">
						    <Form.Label>Enter your email:</Form.Label>
						    <Form.Control 
							    type="email" 
							    placeholder="Email" 
							    name="email" 
							    value={this.state.email}
							    onChange={(e) => this.handleInputChange(e)} />
						  </Form.Group>
						   <Form.Text className="error-text">{this.state.emailError}</Form.Text>
						 </Col>

						 <Col>
						  <Form.Group controlId="formGroupPassword">
						    <Form.Label>Enter your password:</Form.Label>
						    <Form.Control 
							    type="password" 
							    placeholder="Password" 
							    name="password" 
							    value={this.state.password}
							    onChange={(e) => this.handleInputChange(e)}/>
						  </Form.Group>
						   <Form.Text className="error-text">{this.state.passwordError}</Form.Text>
						 </Col>
					

			  		  <Col>
						 	<Form.Group >
						    <Form.Label>Your Latitude:</Form.Label>
						      <Form.Control type="text" readOnly defaultValue={userLat} />
						   </Form.Group>
						 </Col>	

			  			<Col>
							<Form.Group >
						    <Form.Label>Your Longitude:</Form.Label>
						      <Form.Control type="text" readOnly defaultValue={userLong} />
						   </Form.Group>
			
						 </Col>
					
			  		</Row>

			  			<Row>
						<Col>
							<Form.Group controlId="formGroupMessage">
			    			<Form.Label>Enter a short message:</Form.Label>
						    <Form.Control 
							    type="text" 
							    placeholder="Message" 
							    name="message" 
							    value={this.state.message}
							    onChange={(e) => this.handleInputChange(e)} />
						  </Form.Group>
						  <Form.Text className="error-text">{this.state.messageError}</Form.Text>
						 </Col>

						 <Col>
							<Form.Group controlId="formGroupRecommendation">
			    			<Form.Label>Any travel tips?</Form.Label>
						    <Form.Control 
							    type="text" 
							    placeholder="Recommendation" 
							    name="recommendation" 
							    value={this.state.recommendation}
							    onChange={(e) => this.handleInputChange(e)} />
						  </Form.Group>
						 </Col>
			 		
			 
			 	
			 			<Col>
						  <Form.Group controlId="formTraveledTo">
						    <Form.Label>Cities you have been to?</Form.Label>
						    <Form.Control 
							    type="text" 
							    placeholder="Traveled To" 
							    name="traveledTo" 
							    value={this.state.traveledTo}
							    onChange={(e) => this.handleInputChange(e)} />
						  </Form.Group>
						 </Col>

						 <Col>
						  <Form.Group controlId="formWishListCities">
						    <Form.Label>Cities you want to visit?</Form.Label>
						    <Form.Control 
							    type="text" 
							    placeholder="Wish List Cities" 
							    name="wishListCities" 
							    value={this.state.wishListCities}
							    onChange={(e) => this.handleInputChange(e)}/>
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
        </div>


		);
	}
}