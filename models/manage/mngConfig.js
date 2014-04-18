var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var Mixed    = Schema.Types.Mixed;

var schema = new Schema({
	key: { type: String, index: true },
	value: String
});

module.exports = mongoose.model('MngConfig', schema, 'manage.config');