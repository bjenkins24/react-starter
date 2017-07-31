const gulp = require('gulp'),
    cond = require('gulp-cond'),
    watchify = require('watchify'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    assign = require('lodash.assign'),
    uglify = require('gulp-uglify'),
    { browserSync } = require('./watch'),
    { PRODUCTION, WATCH } = require('../config');

const browserifyOptions = assign({}, watchify.args, {
    entries: ['./src/app.js'],
    debug: !PRODUCTION
});

var browserifyInstance = browserify(browserifyOptions)
    .transform(babelify.configure({
        presets: ['es2015', 'react']
    }));

if (WATCH) {
    browserifyInstance = watchify(browserifyInstance);
}

browserifyInstance.on('update', bundle); // on any dep update, runs the bundler
browserifyInstance.on('log', gutil.log); // output build logs to terminal
browserifyInstance.bundle().on('data', function() {});

gulp.task('js:build', bundle);

function bundle() {
    browserifyInstance.bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(cond(!PRODUCTION, sourcemaps.init()))
        .pipe(cond(PRODUCTION, uglify()))
        .pipe(cond(!PRODUCTION, sourcemaps.write('./')))
        .pipe(gulp.dest('./public'));
}
