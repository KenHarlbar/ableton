const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {
  return gulp.src('assets/styles/*.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function () {
  gulp.watch('assets/styles/*.css', gulp.series('styles'));
});
