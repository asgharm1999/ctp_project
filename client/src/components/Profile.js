import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroup';


export default class Profile extends React.Component{
	constructor(props){
	super(props);
	}

	render() {
		return(
			<div>
			<Card className="profile-card">
			  <Card.Body>
			    <Card.Title>{this.props.firstname}{' '}{this.props.lastname}'s Profile</Card.Title>
			    <Card.Subtitle className="mb-2 text-muted">Click Here to Chat</Card.Subtitle>
			      <ListGroup className="list-group-flush">
				    <ListGroupItem>
				    	<Card.Text>My travel recommendations:{' '}{this.props.recommendation}</Card.Text>
				    </ListGroupItem>
				    <ListGroupItem>
				    	<Card.Text>Bio:{' '}{this.props.message}</Card.Text>
				    </ListGroupItem>
				    <ListGroupItem>
				    	<Card.Text>Cities I've been to:{' '}{this.props.traveledto}</Card.Text>
				    </ListGroupItem>
				       <ListGroupItem>
				    	<Card.Text>Cities on my travel wishlist:{' '}{this.props.wishlistcities}</Card.Text>
				    </ListGroupItem>
				  </ListGroup>

			  </Card.Body>
			</Card>
			</div>
		)
	}
}

