import React from 'react';
import './Login.css';

export default class Login extends React.Component {
	/*will add login functionality here*/

	render() {
		return(
			<div className="login-form">	
				<form>
					<label>
					Username:
						<input type="text" value="" />
					</label>
					<label>
					Password: 
						<input type="text" value="" />
					</label>
				</form>


			</div>

			);

	}
}