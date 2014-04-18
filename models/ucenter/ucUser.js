var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var Mixed    = Schema.Types.Mixed;

var schema   = new Schema({
	siteId     : { type: ObjectId, ref: 'SiteData', required: true },
	openId     : { type: String, default: '', required: true },
	score      : { type: Number, default: 0 },
	contact    : {
		mobile : String,
		qq     : String,
		email  : String,
		weixin : String,
		weibo  : String
	},
	nickName   : { type: String, default: '' },
	realName   : { type: String, default: '' },
	faceImgUrl : { type: String, default: '' },
	sex        : { type: String, default: '男', enum: ['男', '女'] },
	rawData    : { type: Mixed, default: null },
	createdAt  : { type: Date, default: Date.now },
	status     : { type: Number, default: 1}
});

schema.index({ siteId: 1, openId: 1 }, { unique: true });

// incScore(id, score, cb) or incScore(siteId, openId, score, cb)
schema.static('incScore', function(){
	if(arguments.length == 4){
		return incScoreBySiteIdAndOpenId.apply(this, arguments);
	}
	else{
		return incScoreById.apply(this, arguments);
	}
});

function incScoreById(id, score, cb){
	return this.update({_id: id}, {score: {$inc: score}}, cb);
}

function incScoreBySiteIdAndOpenId(siteId, openId, score, cb){
	return this.update({siteId: siteId, openId: openId}, {score: {$inc: score}}, cb);
}

module.exports = mongoose.model('UCUser', schema, 'uc.users');