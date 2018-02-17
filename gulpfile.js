const gulp = require('gulp');

const sass = require('gulp-sass');

const rename = require('gulp-rename');


gulp.task('styles', () => 
{
    gulp
    .src('app.sass')
    .pipe(sass())
    .pipe(gulp.dest('public/css'));

})

gulp.task('assets', () => 
{
    gulp
    .src('assets/*/*')
    .pipe(gulp.dest('public'))
})
gulp.task('default',['styles','assets']);