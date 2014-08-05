/*

Needed tasks:

- BrowserSync
- Markdown converter for docs content
- Jade converter
- SASS

 */

var browserSync = require('browser-sync');
var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('jade', function () {
  return gulp.src('partials/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('./'));
});
