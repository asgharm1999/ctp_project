import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import styled from 'styled-components';

const Styles = styled.div`

	.formCentered {
		margin: 0 auto;
		width: 40%
	}
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
			<Styles>
			<Form onSubmit={(e) => this.handleSubmit(e)} className="formCentered">
			  <Form.Group controlId="formGroupEmail">
			    <Form.Label>Email address</Form.Label>
			    <p>email is: {email}</p>
			    <Form.Control type="email" placeholder="Enter email" 
			    name="email" onChange={(e) => this.handleInputChange(e)} />
			  </Form.Group>
			  <Form.Group controlId="formGroupPassword">
			    <Form.Label>Password</Form.Label>
			    <p>password is: {password}</p>
			    <Form.Control type="password" placeholder="Password" 
			    name="password" onChange={(e) => this.handleInputChange(e)}/>
			  </Form.Group>
			  <Button variant="primary" type="submit">
			  Log In</Button>
			</Form>
			</Styles>
		);
	}
}

