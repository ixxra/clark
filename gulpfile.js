var gulp = require('gulp');

gulp.task('compileMarkup', function() {
    var srcGenerator = require('./lib/markupCompiler.js');
    srcGenerator().pipe(gulp.dest('public'));
});

gulp.task('copyRevealAssets', function (){
    gulp.src('node_modules/reveal.js/css/**/*.css')
        .pipe(gulp.dest('public/css'));
    gulp.src('node_modules/reveal.js/js/*.js')
        .pipe(gulp.dest('public/js'));
    gulp.src('node_modules/reveal.js/lib/**')
        .pipe(gulp.dest('public/lib'));
    gulp.src('node_modules/reveal.js/plugin/**')
        .pipe(gulp.dest('public/plugin'));    
});

gulp.task('serve', function () {
    var server = require('./lib/server.js');
    server();
});

gulp.task('default', ['compileMarkup', 'copyRevealAssets']);
