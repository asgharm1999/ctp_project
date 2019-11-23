import React from 'react';
import Card from 'react-bootstrap/Card';


export default class Profile extends React.Component{
	constructor(props){
	super(props);
	this.state = {
		name: "Bob's ",
		title: "Profile",
		message: 'test',
		recommendations: 'I like Barcelona, Rome, and Berlin!'

		}
	}

	render() {
		return(
			<div>
			<Card style={{ width: '18rem' }}>
			  <Card.Body>
			    <Card.Title>{this.state.name}{this.state.title}</Card.Title>
			    <Card.Subtitle className="mb-2 text-muted">Click Here to Chat</Card.Subtitle>
			    <Card.Text>
			      {this.state.recommendations}
			    </Card.Text>
			     <Card.Text>
			      {this.state.message}
			    </Card.Text>
			    <Card.Link href="#">Card Link</Card.Link>
			    <Card.Link href="#">Another Link</Card.Link>
			  </Card.Body>
			</Card>
			</div>
		)
	}
}

