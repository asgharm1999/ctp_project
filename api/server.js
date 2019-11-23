const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
<<<<<<< HEAD
const Users = require('./models/Users.js');
const router = express.Router();
=======
>>>>>>> 2b9f6614a3865d2f0ea8787de51257dc7f7dc494

// Database (brings in database connection from ./config/database)
const db = require('./config/database');

const app = express();


//api for index page
app.get('/', (req, res) => res.send('INDEX'));


//api for users list
//populates map, but we should populate map via an api fetch call
//this is only temp 
<<<<<<< HEAD

app.get('/api/users', (req,res) => {
  console.log('/api/users called');
  Users.findAll({})
    .then(user => res.json(user));
});

app.post('/api/users',
  //passport.isAuthenticated(),
  (req, res) => {
    let { content } = req.body;
    
    Users.create({ content })
      .then(post => {
        res.status(201).json(post);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  }
);

/*
app.get('/api/users', (req, res) => {

=======
app.get('/api/users', (req, res) => {
>>>>>>> 2b9f6614a3865d2f0ea8787de51257dc7f7dc494
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
<<<<<<< HEAD
 
=======
>>>>>>> 2b9f6614a3865d2f0ea8787de51257dc7f7dc494


  	res.json(users);
});

<<<<<<< HEAD
*/
=======

>>>>>>> 2b9f6614a3865d2f0ea8787de51257dc7f7dc494
// Users routes
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));