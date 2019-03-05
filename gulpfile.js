const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => gulp.src('./styles/*.css')
  .pipe(cleanCSS())
  .pipe(gulp.dest('./dist')));
