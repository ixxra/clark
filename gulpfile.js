var gulp = require('gulp');



gulp.task('compileMarkup', function() {
    var srcGenerator = require('./lib/markupCompiler.js');
    srcGenerator().pipe(gulp.dest('dist'));
});

gulp.task('copyRevealAssets', function (){
    gulp.src('node_modules/reveal.js/css/**/*.css')
        .pipe(gulp.dest('dist/css'));
    gulp.src('node_modules/reveal.js/js/*.js')
        .pipe(gulp.dest('dist/js'));
    gulp.src('node_modules/reveal.js/lib/**')
        .pipe(gulp.dest('dist/lib'));
    gulp.src('node_modules/reveal.js/plugin/**')
        .pipe(gulp.dest('dist/plugin'));    
});

gulp.task('serve', function () {
    var server = require('./lib/server.js');
    server();
});

gulp.task('default', ['compileMarkup', 'copyRevealAssets']);
