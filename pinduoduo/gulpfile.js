var gulp = require('gulp');
var concat = require('gulp-concat');


gulp.task('js',function(){
	return gulp.src('src/js/*js')
	.pipe(concat('build.js'))
	.pipe(gulp.dest('dist/js/'))
})