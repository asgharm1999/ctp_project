const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Users = require('../models/Users')

// var router = global.app;

// Get users list
router.get('/', (req, res) =>
	Users.findAll()
		.then(user => {

			console.log(user);
			res.sendStatus(200);

		})
		.catch(err => console.log(err)));

function nextId() {
	return Math.ceil(Math.random() * 10000);
}

// Add a user
router.get('/add', (req, res) => {
	// const data = {
	// 	first_name: 'John',
	// 	last_name: 'Smith',
	// 	email: 'js@gmail.com',
	// 	password: '123456',
	// 	travel_to: 'LA',
	// 	message: 'Hello World!',
	// 	latitude: 50.760610,
	// 	longitude: -60.935242
	// }

	var data = {};

	data.first_name = req.query.fname;
	data.last_name = req.query.lname;
	data.icon_hash = req.query.icon;

	let { first_name, last_name, email, password,
		travel_to, message, latitude, longitude } = data;

	// // Insert into table
	// Users.create({
	// 	first_name: first_name,
	// 	last_name: last_name,
	// 	email: email,
	// 	password: password,
	// 	travel_to: travel_to,
	// 	message: message,
	// 	latitude: latitude,
	// 	longitude: longitude
	// })
	// 	.then(user => res.redirect('/users'))
	// 	.catch(err => console.log(err));

	var id = nextId() + Math.ceil(Math.random() * 100);
	// var first_name = 'Test';
	// var last_name = 'Name';
	var d = new Date();
	var created_on = Date.;
	var last_login = `${d.getYear()}-${d.getMonth()}-${d.getDay()}`;
	var icon_hash = data.icon_hash;

	console.log(`INSERTING!!!!!!`)

	var q = `INSERT INTO users3 (id, first_name, last_name, created_on, last_login, icon_hash) VALUES( ${id}, '${first_name}', '${last_name}', '${created_on}', '${last_login}', '${icon_hash}' )`;
	console.log(q);

	var s = db.query(q, function (err) {
		if (err) {
			console.warn('Failed to add into database!');
			console.log(err);
		} else {
			console.log('Added user to database!');
		}
	}).then((res) => {
		console.log('Done.')

		console.log(res)
		// Results will be an empty array and metadata will contain the number of affected rows.
	});



});

router.get('/login', (req, res) => {
	const data = {
		email: 'js@gmail.com',
		password: '123456'
	};

})

module.exports = router;