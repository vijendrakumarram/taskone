const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Connecting to database
mongoose.connect('mongodb://localhost/taskone');
let db = mongoose.connection;

//Check for DB connection
db.once('open', function(){
	console.log('Connected to MongoDB');
})

//Check for DB error
db.on('error', function(err){
	console.log(err);
});

// Init App
const app = express();

// Bring in userss from DB
let Project = require('./models/user');

// Body parser Middleware
// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
// parse app/json
app.use(bodyParser.json());

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public'))); 

// GET all users
app.get('/users', function(req, res){

	User.find({},function(err, user){
		if(err){
			console.log(err);
		}
		else{
			res.json(user);
	  }
	});
});

// Single User Route
app.get('/user/:id', function(req, res){
	Event.findById(req.params.id, function(err, user){
		res.json(user);
	});
});


// Starting Server
app.listen(process.env.PORT || 5000, function(){
	console.log('Server started listening on Port 5000... ')
});