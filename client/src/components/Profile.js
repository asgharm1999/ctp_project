import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroup';



export default class Profile extends React.Component{

	render() {
		return(
			<div>
			<Card className="profile-card" bg="light">
			  <Card.Body>
			    <Card.Title as="h3">{this.props.header}</Card.Title>
			    <Card.Title>{this.props.firstname}{' '}{this.props.lastname}'s Profile</Card.Title>
		
			    <Card.Subtitle className="mb-2 text-muted">	<a href={`mailto:${this.props.email}`}>Contact Me</a></Card.Subtitle>
			      <ListGroup variant="flush">
				    <ListGroupItem>
				    	<Card.Text><span className="bio-lead">My travel recommendations:</span>{' '}{this.props.recommendation}</Card.Text>
				    </ListGroupItem>
				    <ListGroupItem>

				    	<Card.Text><span className="bio-lead">Bio/Message:</span>{' '}{this.props.message}
				    	</Card.Text>
				    </ListGroupItem>
				    <ListGroupItem>
				    	<Card.Text><span className="bio-lead">Cities/Countries I've been to:</span>{' '}{this.props.traveledto}</Card.Text>
				    </ListGroupItem>
				       <ListGroupItem>
				    	<Card.Text><span className="bio-lead">Cities/Countries on my travel wishlist:</span>{' '}{this.props.wishlistcities}</Card.Text>
				    </ListGroupItem>
				  </ListGroup>
				      <footer className="blockquote-footer">

        “Live with no excuses and travel with no regrets” <cite title="Source Title">~ Oscar Wilde</cite>
      </footer>

			  </Card.Body>
			</Card>
			</div>
		)
	}
}

