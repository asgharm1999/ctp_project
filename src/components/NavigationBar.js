import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

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
		<Navbar expand="lg" className="navbar" bg="dark">
			<Navbar.Brand className="navbar-brand" href="/">Global-Port</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto" variant="tabs">
					{/*<Nav.Item><Nav.Link className="nav-item" href="/">Home</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link className="nav-item" href="/about">About</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link className="nav-item" href="/contact">Contact</Nav.Link></Nav.Item>*/}
				</Nav>
			</Navbar.Collapse>
		</Navbar>

	</Styles>

	)