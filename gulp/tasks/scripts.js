/* eslint-disable import/no-extraneous-dependencies */
const gulp = require('gulp');
const cond = require('gulp-cond');
const watchify = require('watchify');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const gutil = require('gulp-util');
const sourcemaps = require('gulp-sourcemaps');
const assign = require('lodash.assign');
const uglify = require('gulp-uglify');
const { PRODUCTION, WATCH } = require('../config');

const browserifyOptions = assign({}, watchify.args, {
  entries: ['./src'],
  debug: !PRODUCTION,
});

let browserifyInstance = browserify(browserifyOptions)
  .transform(babelify.configure({
    presets: ['es2015', 'react', 'stage-1'],
  }));

if (WATCH) {
  browserifyInstance = watchify(browserifyInstance);
}

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

browserifyInstance.on('update', bundle); // on any dep update, runs the bundler
browserifyInstance.on('log', gutil.log); // output build logs to terminal
browserifyInstance.bundle().on('data', () => {});

gulp.task('js:build', bundle);
