var path = require('path');
var fs   = require('fs');

module.exports = function(app){
	app.get('/', function(req, res){
		res.redirect('/site');
	});

	app.get('/site', function(req, res){
		res.sendfile(path.join(app.rootDir, 'public/site/index.html'));
	});

	app.get('/manage', function(req, res){
		res.sendfile(path.join(app.rootDir, 'public/manage/index.html'));
	});

	['manage', 'site', 'wx'].forEach(function(folder){
		fs.readdirSync(path.join(app.rootDir, 'controllers', folder)).forEach(function(file){
			if(file.split('.').pop() == 'js')
				require(path.join(app.rootDir, 'controllers', folder, file))(app);
		});
	});
};