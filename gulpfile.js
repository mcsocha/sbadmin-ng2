var gulp = require('gulp');
var typescript = require('gulp-tsc');

gulp.task('copy:node_modules', function () {
    gulp.src('./node_modules/**/*')
    .pipe(gulp.dest('./wwwroot/app/lib'));
});


//gulp.task('compile:ts', function () {
//    gulp.src('./wwwroot/app/**/*.ts', { read: false })
//      .pipe(typescript({
//          experimentalDecorators: true,
//          emitDecoratorMetadata: true,
//          module: 'system',
//          target: 'es5',
//          noEmitOnError: true,
//          sourceMap: true,
//          removeComments: false
//      }))
//      .pipe(gulp.dest('./wwwroot/app'))
//});