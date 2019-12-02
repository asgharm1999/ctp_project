const express = require('express');
<<<<<<< HEAD
const exphbs = require('express-handlebars');
=======
>>>>>>> fcc5535a4c8c078accd14b6f3a63152c50b14334
const bodyParser = require('body-parser');
const path = require('path');

// Database (brings in database connection from ./config/database)
const db = require('./config/database');

const app = express();


//api for index page
app.get('/', (req, res) => res.send('INDEX'));


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