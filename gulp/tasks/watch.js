/* eslint-disable import/no-extraneous-dependencies */
const gulp = require('gulp');
const browserSync = require('browser-sync');
const nodemon = require('gulp-nodemon');

gulp.task('watch', () => {
  nodemon({
    script: 'server/index.js',
    ignore: [
      'gulpfile.js',
      'gulp/**/*',
      'node_modules',
      'public',
    ],
  }).on('start', () => {
    if (!browserSync.has('dexio')) {
      browserSync.create('dexio');
      browserSync.init({
        notify: false,
        proxy: `localhost:${process.env.PORT}`,
        port: 5000,
      });
    }
  }).on('restart', () => {
    setTimeout(() => {
      browserSync.reload({ stream: false });
    }, 1000);
  });

  gulp.watch('./public/bundle.js').on('change', result => (
    gulp.src(result.path)
      .pipe(browserSync.reload({ stream: true }))
  ));
});
