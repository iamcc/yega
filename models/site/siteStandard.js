var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var Mixed    = Schema.Types.Mixed;

var schema = new Schema();

module.exports = mongoose.model('SiteStandard', schema, 'site.standards');