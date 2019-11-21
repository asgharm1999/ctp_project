//database connection
const Sequelize = require('sequelize');
						//name of postgresql db, username, password
const db = new Sequelize('GLOBALPORT_development', 'ctp_user', 'ctp_pass', {
	host: 'localhost',
	dialect: 'postgres',
	operatorsAliases: false,

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	},

});

// Test db
db.authenticate()
	.then(() => console.log('database connected...'))
	.catch(err => console.log('Error: ' + err))

module.exports = db;