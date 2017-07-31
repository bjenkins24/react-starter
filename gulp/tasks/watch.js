const gulp = require('gulp'),
    browserSync = require('browser-sync'),
    nodemon = require('gulp-nodemon');

gulp.task('watch', () => {
    nodemon({
        script: 'server/server.js',
        ignore: [
            'gulpfile.js',
            'gulp/**/*',
            'node_modules',
            'src',
            'public'
        ]
    }).on('start', () => {
        if (!browserSync.has('dexio')) {
            browserSync.create('dexio')
            browserSync.init({
                notify: false,
                proxy: `localhost:${process.env.PORT}`,
                port: 5000
            });
        }
    }).on('restart', () => {
        setTimeout(function () {
          browserSync.reload({ stream: false });
        }, 1000);
    });

    gulp.watch('./public/bundle.js').on('change', function(result) {
        return gulp.src(result.path)
            .pipe(browserSync.reload({ stream: true }));
    });
});
