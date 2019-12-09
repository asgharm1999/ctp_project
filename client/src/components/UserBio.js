import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const UserBio_Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items:center;
	height: 60vh;
`;

const initialState = {
	fullName: '',
	message: '',
	messageError: '',
	recommendation: '',
	traveledTo: '',
	wishListCities: '',
	sucesss: false,
	error: false
}

export default class UserBio extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			fullName: '',
            message: '',
            messageError: '',
            recommendation: '',
            traveledTo: '',
            wishListCities: '',
            sucesss: false,
            error: false,
            
		}
	}

	validate = () => {
		let messageError = '';

		if (!this.state.message) {
			messageError = "Message cannot be blank";
		}

		if (messageError) {
			this.setState({
				messageError
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

		console.log(event);

		const data = this.state;

		fetch("/api/auth/userbio", {
	      method: 'POST',
	      credentials: 'include',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      body: JSON.stringify(
	      	{fullName: (this.props.yourName),
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
	      })
	      .catch(err => {
	        this.setState({
	          error: true,
	        });

	        console.log(err);
	      });
	      	
			console.log('User bio in data is: ', data);
			this.setState(initialState);


		}

		
	
	}


	handleInputChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})


	}


	render() {
		const {fullName, message, recommendation, traveledTo, wishListCities} = this.state;

		const yourName = this.props.fullName;

		return(
			//Card style is in App.css
		<UserBio_Wrapper>
			<Card className="userbio-form" bg="dark" text="white" style={{ width: '50rem' }}>
			<Card.Body>
			<Container>
				<Row >
					<Col>
            	<Card.Title>Enter details about yourself</Card.Title>
            		</Col>
            	</Row>
            </Container>
            	
			<Container>
			
				<Form onSubmit={(e) => this.handleSubmit(e)} className="formCentered">
					<Row>
						<Col>
							<Form.Group controlId="formGroupMessage">
			    			<Form.Label>Enter a message: {message}</Form.Label>
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
			    			<Form.Label>Any recommendation? {recommendation}</Form.Label>
						    <Form.Control 
							    type="text" 
							    placeholder="Recommendation" 
							    name="recommendation" 
							    value={this.state.recommendation}
							    onChange={(e) => this.handleInputChange(e)} />
						  </Form.Group>
						 </Col>
			 		</Row>
			 
			 		<Row>
			 			<Col>
						  <Form.Group controlId="formTraveledTo">
						    <Form.Label>What cities have you been to? {traveledTo}</Form.Label>
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
						    <Form.Label>What cities do you want to go to? {wishListCities}</Form.Label>
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
						 	<Form.Group >
						    <Form.Label>Full Name</Form.Label>
						      <Form.Control type="text" readOnly defaultValue={yourName} />
						   </Form.Group>
						 </Col>

					
			  		</Row>
			  
			  		<Row>
			  			<Col>
						  <Button variant="info" type="submit" onClick={(e) => this.handleSubmit(e)}>
						  Submit</Button>
					  	</Col>
					 </Row>
				</Form>
			</Container>
		</Card.Body>
        </Card>
        </UserBio_Wrapper>


		);
	}
}