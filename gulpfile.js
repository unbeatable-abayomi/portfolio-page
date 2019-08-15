var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
 
gulp.task('scripts', function() {
  return gulp.src('./js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./mainJs/'));
});
gulp.task('cssnano', function() {
    return gulp.src('./style/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./mainCss'));
});


 
