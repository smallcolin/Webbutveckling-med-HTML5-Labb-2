var gulp = require('gulp'),
vulcanize = require('gulp-vulcanize');

gulp.task('vulcanize', function () {
	return gulp.src('index.html')
	.pipe(vulcanize({
		stripComments: true,
		inlineScripts: true,
		inlineCss: true }))
	.pipe(gulp.dest('labb2'));
});

gulp.task('content', function () {
	return gulp.src(['css/*.css', 'img/*.jpeg'] , { base: '.' })
	.pipe(gulp.dest('labb2'));
});

gulp.task('default', ['vulcanize', 'content', 'watch']);

gulp.task('watch', function() { 
	gulp.watch('*.html', ['vulcanize']); 
});
