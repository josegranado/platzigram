const gulp = require('gulp');

const sass = require('gulp-sass');

const rename = require('gulp-rename');

const babel = require('babelify');

const browserify = require('browserify');

const source = require('vinyl-source-stream');

gulp.task('styles', () => 
{
    gulp
    .src('app.sass')
    .pipe(sass())
    .pipe(gulp.dest('public/css'))

})

gulp.task('assets', () => 
{
    gulp
    .src('assets/*/*')
    .pipe(gulp.dest('public'))
})

gulp.task('scripts', () =>
{
    browserify('./src/index.js')
     .transform(babel, { presets:['env'] })
     .bundle()
     .pipe(source('index.js'))
     .pipe(rename('app.js'))
     .pipe(gulp.dest('public'))
})


gulp.task('default',['styles','assets','scripts'])