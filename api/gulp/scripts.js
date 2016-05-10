var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');

/*
Load js files into gulp with stream then output to gulp.dest
*/
gulp.task('js', function () {
	gulp.src(['ng/module.js', 'ng/**/*.js'])
		.pipe(sourcemaps.init())
			.pipe(concat('app.js'))
			.pipe(ngAnnotate())
			.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('assets'));
});

/*
Watch for change in Angular code and run Gulp
*/
gulp.task('watch:js', ['js'], function () {
	gulp.watch('ng/**/*.js', ['js']);
});
