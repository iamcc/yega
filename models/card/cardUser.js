var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var schema = new Schema({
	uid: { type: ObjectId, ref: 'UCenterUser' },
	cardNum: { type: String, default: '' },
	cardType: { type: String, default: '' },
	score: { type: Number, default: 0 },
	createdAt: { type: Date, default: Date.now },
	status: { type: Number, default: 1 }
});

module.exports = mongoose.model('CardUser', schema, 'card.users');