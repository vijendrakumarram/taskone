let mongoose = require('mongoose');

//Event Schema
let eventSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	sessions:{
		type: Number,
		required: true
	},
	starttime:{
		type: String,
		required: true
	},
	endtime:{
		type: String,
		required: true
	},
	averageusetime:{
		type: String,
		required: true
	},
	itemsviewed: [{
		type: String,
		required: true
	}]
});

let User = module.exports = mongoose.model('User',eventSchema);