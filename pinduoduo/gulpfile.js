var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssClean = require('gulp-clean-css');


gulp.task('jsmin',function(){
	return gulp.src('src/js/*js')
	.pipe(uglify())
	.pipe(gulp.dest('dist/js/'))
})

gulp.task('cssmin',function(){
	return gulp.src('src/css/*css')
	.pipe(cssClean())
	.pipe(gulp.dest('dist/css/'))
})