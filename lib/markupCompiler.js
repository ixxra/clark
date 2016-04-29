var pug = require('pug');
var gutil = require('gulp-util');

module.exports = function compile(){
    var html = pug.renderFile('./app/layout/index.jade', {pretty:
        true});

    var src = require('stream').Readable({objectMode: true});
    src._read = function () {
        this.push(new gutil.File({
            cwd: "",
            base: "", 
            path: "index.html",
            contents: new Buffer(html)
        }));
        this.push(null);
    };
    return src;
};
