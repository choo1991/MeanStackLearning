var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');

/*
load js files into gulp with stream then output to gulp.dest
*/
gulp.task('js', function () {
	gulp.src(['ng/module.js', 'ng/**/*.js'])
		.pipe(concat('app.js'))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(gulp.dest('assets'));
});
