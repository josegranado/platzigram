const gulp = require('gulp');

const sass = require('gulp-sass');

gulp.task('styles', () => 
{
    gulp
    .src('public/app.sass')
    .pipe(sass())
    .pipe(gulp.dest('public'));

})

gulp.task('default',['styles']);