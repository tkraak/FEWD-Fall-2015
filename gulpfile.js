var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: ''
    },
  })
});

gulp.task('watch', ['browserSync'], function() {
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('css/*.css', browserSync.reload);
  gulp.watch('*.md', browserSync.relead);
});
