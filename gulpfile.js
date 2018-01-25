import { request } from 'https';

var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    htmlReplace = require('gulp-html-replace');

gulp.task('copy', ['clean'], function() {
    return gulp.src('src/**/*')
        .pipe(gulp.dest('dist'));
});
    
gulp.task('clean', function() {
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('build-img', ['copy'], function() {
    gulp.src('dist/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('build-js', function() {
    gulp.src('dist/js/**/*.js')
        .pipe(concat('all.js'))
        .pipe('dist/js');
});

gulp.task('build-html', function() {
    gulp.src('dist/**/*.html')
        .pipe(htmlReplace({
            js: 'all.js'
        }))
        .pipe(gulp.dest('dist'));
})