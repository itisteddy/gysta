'use strict';


// build flow that copies MyNiceProgram.exe to another
// directory (with forced folder creation and overwrite)
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

// scss input and output path
var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';

// compile scss
gulp.task('compile_scss', function(){
	gulp.src(SCSS_SRC)
	.pipe(sass().on('error', sass.logError))
	.pipe(minifyCSS())
	.pipe(rename({ suffix: '.min' }))
	.pipe(changed(SCSS_DEST))
	.pipe(gulp.dest(SCSS_DEST));
});

// detect changes in SCSS
gulp.task('watch_scss', function(){
	gulp.watch(SCSS_SRC, ['compile_scss']);
});

// Run tasks
gulp.task('default', ['watch_scss']);