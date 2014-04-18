var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var Mixed    = Schema.Types.Mixed;

var schema = new Schema({
	userName   : { type: String, default: '' },
	email      : { type: String, required: true},
	password   : { type: String, required: true },
	role       : { type: String, default: 'admin', enum: ['superAdmin', 'admin', 'agent'] },
	permission : { type: Mixed, default: null },
	createdAt  : { type: Date, default: Date.now },
	status     : { type: Number, default: 1 }
});

schema.path('email').validate(function(email){
	var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	return emailRegex.test(email);
}, 'email格式不正确');

module.exports = mongoose.model('MngUser', schema, 'manage.users');