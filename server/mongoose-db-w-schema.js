const mongoose = require('mongoose');
const userModel = require('./schema/User')

const server = '127.0.0.1:27017';
const database = 'users';

class Database {
  constructor() {
	this._connect()
  }

_connect() {
 	mongoose.connect(`mongodb://${server}/${database}`)
   	.then(testingSavingUser())
   	.catch(err => {
     	console.error('Database connection error')
   	})
  }
}

function testingSavingUser(){
    let user = new userModel({
	title: "David",
    desc: "Hello",
	priority: "Low",
    date: "Mon",
  })

  user.save()
	.then(doc => {
  	console.log("user " +doc.name+ " added to the database")
  	console.log(doc)
	})
	.catch(err => {
  	console.error(err)
	})

console.log('Database connection successful')
}

module.exports = new Database()