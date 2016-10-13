var gulp = require('gulp');
browserSync = require('browser-sync');
cleanCSS = require('gulp-clean-css');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('browser-sync', function () {
   var files = [
      '*.html'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './'
      }
   });
});

gulp.task('minify-css', function() {
  return gulp.src('*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});
