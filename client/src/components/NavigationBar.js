import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
<<<<<<< HEAD

const Styles = styled.div`
	.navbar {
		background-color: black;
		height: 80px;
	}

	.navbar-brand {
		color: white;
	}

	.navbar-brand:hover {
		color: teal;
	}


`;

export const NavigationBar = () => (
	<Styles>
		<Navbar expand="lg" className="navbar .z-depth-2" bg="dark">
			<Navbar.Brand className="navbar-brand" href="/">Global-Port</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto" variant="tabs">
					{/*<Nav.Item><Nav.Link className="nav-item" href="/">Home</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link className="nav-item" href="/about">About</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link className="nav-item" href="/contact">Contact</Nav.Link></Nav.Item>*/}
				</Nav>
			</Navbar.Collapse>
=======
import mapImage from '../assets/map.svg';

const Styles = styled.div`
	.navbar {
		background-color:transparent !important;
		position: absolute;
		height: 80px;
		width: 75%;
		left: 55px;
		z-index: 20000;
	}

	.navbar-text {
		height: 70px;
		transition: box-shadow .3s;
		border-radius: 10px;
		font-weight: 600;
	
	}

	.navbar-text-title {
		font-size: 50px;
		text-decoration: none;
 
	}

	.navbar-text:hover {

		box-shadow: 10px 5px 5px rgba(33,33,33,.7); 

	
	}

	.navbar-image {
		cursor: pointer;
		transition: box-shadow .3s;
		border-radius: 10px;
	}

	.navbar-image:hover {
		box-shadow: 10px 5px 5px rgba(33,33,33,.7); 
	}
`;


export const NavigationBar = () => (
	<Styles>
		<Navbar className="navbar .z-depth-2 justify-content-start">
			<Navbar.Brand>
			<img className="navbar-image"
		        alt="Test"
		        src={mapImage}
		        width="100px"
		        height="70px"
		        href="/"
		      />{' '}

			</Navbar.Brand>
		<Navbar.Text className="navbar-text"> 
			<a href="/" className="navbar-text-title">Global-Port</a>
		</Navbar.Text>
>>>>>>> asghar
		</Navbar>

	</Styles>

	)