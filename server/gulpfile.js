var gulp = require('gulp');

gulp.task('installFoundationJs', function (){
  var root = './client/lib/foundation/assets/js/vendor/';
  gulp.src(root + '**/*.js').pipe(gulp.dest('./public/javascripts'));
});

gulp.task('buildStylesheets', function () {
  var builder = require('./lib/stylesheetBuilder');
  builder();
});

gulp.task('addJs', function(){
  gulp.src('./client/src/**/*.js').pipe(gulp.dest('./public/javascripts'));
});

gulp.task('watch', ['addJs'],  function(){
  gulp.watch('./client/src/**/*.js');
});

gulp.task('default', ['buildStylesheets', 'addJs', 'watch']);
