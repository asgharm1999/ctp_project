import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
	.navbar {
		background-color: #343a4000!important;
		height: 80px;

		position: absolute;
		width: 100%;
		z-index: 20000;
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
			{/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
			
		</Navbar>

	</Styles>

	)