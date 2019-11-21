const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Users = require('../models/Users')

// Get users list
router.get('/', (req, res) => 
	Users.findAll()
	.then(user => {

		console.log(user);
		res.sendStatus(200);

	})
	.catch(err => console.log(err)));

// Add a user
router.get('/add', (req, res) => {
	const data = {
		first_name: 'John',
		last_name: 'Smith',
		email: 'js@gmail.com',
		password: '123456',
		travel_to: 'LA',
		message: 'Hello World!',
		latitude: 50.760610,
        longitude: -60.935242
	}

	let { first_name, last_name, email, password, 
		travel_to, message, latitude, longitude} = data;

	// Insert into table
	Users.create({
		first_name: first_name,
		last_name: last_name,
		email: email,
		password: password,
		travel_to: travel_to,
		message: message,
		latitude: latitude,
		longitude: longitude
	})
		.then(user => res.redirect('/users'))
		.catch(err => console.log(err));
});

module.exports = router;