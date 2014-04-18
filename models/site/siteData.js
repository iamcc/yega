var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var schema = new Schema({
});

module.exports = mongoose.model('SiteData', schema, 'site.data');