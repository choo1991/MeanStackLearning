var gulp = require('gulp');
var concat = require('gulp-concat');

/*
load js files into gulp with stream then output to gulp.dest
*/
gulp.task('js', function () {
	gulp.src('ng/**/*.js')
		.pipe(concat('app.js'))
		.pipe(gulp.dest('assets'));
});
