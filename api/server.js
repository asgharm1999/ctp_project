const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Database (brings in database connection from ./config/database)
const db = require('./config/database');

global.app = express();

var users_router = require('./routes/users');

//api for index page
app.get('/', (req, res) => res.send('INDEX2.html'));


app.use('/users', users_router)

// app.get('/test', (req, res) => res.render('INDEX2.html'));


//api for users list
//populates map, but we should populate map via an api fetch call
//this is only temp 
app.get('/api/users', (req, res) => {
 const users = [
    {id: 1, 
 	firstName: 'First1',
 	lastName: 'Last1',
 	location: {
     	latitude: 40.730610,
     	longitude: -73.925242 }, 
  	message: "Hi, my name is Elias",
  	userName: 'TestUser1',
  	email: 'TestUser1@gmail.com'},

  	{id: 2, 
 	firstName: 'First2',
 	lastName: 'Last2',
 	location: {
     	latitude: 40.720610,
     	longitude: -73.945242 }, 
  	message: "Hi, my name is Muhammad",
  	userName: 'TestUser2',
  	email: 'TestUser2@gmail.com'},

  	{id: 3, 
 	firstName: 'First3',
 	lastName: 'Last3',
 	location: {
     	latitude: 40.740610,
     	longitude: -73.915242 }, 
  	message: "Hi, my name is Jacinta",
  	userName: 'TestUser3',
  	email: 'TestUser3@gmail.com'},
 ];


  	res.json(users);
});


// Users routes
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// var id = 334;
// var first_name = 'Test';
// var last_name = 'Name';
// var created_on = '2019-11-22';
// var last_login = '2019-11-20';
// var icon_hash = '';

// console.log(`INSERTING!!!!!!`)

// var s = db.query(`INSERT INTO users3 (id, first_name, last_name, created_on, last_login, icon_hash) VALUES( ${id}, '${first_name}', '${last_name}', '${created_on}', '${last_login}', '${icon_hash}' )`, function(err) {
// 	if (err) {
// 		console.warn('Failed to insert into database!');
// 		console.log(err);
// 	} else {
// 		console.log('ok');
// 	}
// }).then((res) => {
// 	console.log('ddddddddddddd')

// 	console.log(res)
// 	// Results will be an empty array and metadata will contain the number of affected rows.
//   });

