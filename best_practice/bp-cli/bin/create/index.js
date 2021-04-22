const path = require("path");
const mkdirp = require("mkdirp");

module.exports = function(name) {
	mkdirp(path.join(process.cwd(), name), function(err) {
		if (err) console.error("创建失败");
		else console.log("创建成功");
	});
};