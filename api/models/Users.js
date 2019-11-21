const Sequelize = require('sequelize');
const db = require('../config/database');


const Users = db.define('users', {
	first_name: {
		type: Sequelize.STRING
	},
	last_name: {
		type: Sequelize.STRING
	},
	email: {
		type: Sequelize.STRING
	},
	password: {
		type: Sequelize.STRING
	},
	travel_to: {
		type: Sequelize.STRING
	},
	message: {
		type: Sequelize.STRING
	},
	longitude: {
		type: Sequelize.FLOAT
	},
	latitude: {
		type: Sequelize.FLOAT
	},
	
})

module.exports = Users;