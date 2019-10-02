import React from 'react';
import logo from './logo.svg';
import './Header.css';

export default class Header extends React.Component {
	render() {
		return (
			<header className="App-header">
	         	<h1><img src={logo} className="App-logo" alt="logo" />Global-Port</h1>
	        </header>
        );
	}
}
