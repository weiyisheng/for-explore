var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');


gulp.task('js-runningMan', function () {
    var b = browserify({
        entries: './public/runningMan/js/main.js',
        debug: false
    });

    b.transform(reactify);

    return b.bundle()
        .pipe(source('rm.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./public/bundle'));
});

gulp.task('js-charts', function () {
    var b = browserify({
        entries: './public/charts/js/main.js',
        debug: false
    });

    b.transform(reactify);

    return b.bundle()
        .pipe(source('charts.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./public/bundle'));
});


gulp.task('js-material-ui', function () {
    var b = browserify({
        entries: './public/material-ui/js/main.js',
        debug: false
    })

    b.transform(reactify);

    return b.bundle()
        .pipe(source('mu.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./public/bundle'));

});


gulp.task('watch', function () {
    gulp.watch('./public/runningMan/js/**/*.js', ['js-runningMan']);
    gulp.watch('./public/charts/js/**/*.js', ['js-charts']);
    gulp.watch('./public/material-ui/**/*.js', ['js-material-ui']);
});