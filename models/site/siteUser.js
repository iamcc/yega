var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var schema = new Schema({
	createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SiteUser', schema, 'site.users');