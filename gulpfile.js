var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require("gulp-notify"),
    watch = require('gulp-watch'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload');

//less-task
gulp.task('less', function () {
    return gulp.src('less/*.less')
        .pipe(watch('less/*.less'))
        .pipe(less())
        .pipe(autoprefixer('last 15 versions'))
        .pipe(gulp.dest('css/'))
});

//html-watch
gulp.task('html', function(){
    return gulp.src('index.html')
        .pipe(watch('index.html'))
        .pipe(connect.reload());
});

//html-watch
gulp.task('js', function(){
    return gulp.src('js/*.js')
        .pipe(watch('js/*.js'))
        .pipe(connect.reload());
});

//css-watch
gulp.task('css', function () {
    return gulp.src('css/*.css')
        .pipe(watch('css/*.css'))
        .pipe(connect.reload());
});

//connect
gulp.task('connect', function() {
    connect.server({
        root: '',
        livereload: true
    });
});

//gulp-default
gulp.task('default',
    ['less', 'html', 'js', 'css', 'connect']
);