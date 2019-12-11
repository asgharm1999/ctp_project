import React from 'react';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import mapImage from '../assets/map.svg';

const Styles = styled.div`
	.navbar {
		background-color:transparent !important;
		position: absolute;
		height: 80px;
		width: 10%;
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
		margin-bottom: 10px;
		margin-left: 10px;
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
		        height="65px"
		        href="/"
		      />{' '}

			</Navbar.Brand>
		</Navbar>

	</Styles>

	)