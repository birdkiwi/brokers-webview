var gulp = require('gulp'),
    inlinesource = require('gulp-inline-source');

gulp.task('inlinesource', function () {
    return gulp.src('./index.html')
        .pipe(inlinesource())
        .pipe(gulp.dest('./build-inline'));
});