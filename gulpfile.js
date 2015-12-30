var gulp = require('gulp');
var typescript = require('gulp-tsc');
var exec = require('gulp-exec');

gulp.task('copy:node_modules', function () {
    gulp.src('./node_modules/**/*')
    .pipe(gulp.dest('./wwwroot/node_modules'));
});


//gulp.task('compile:ts', function () {
//    gulp.src('./app/**/*.ts', { read: false })
//      .pipe(typescript({
//          experimentalDecorators: true,
//          emitDecoratorMetadata: true,
//          module: 'system',
//          target: 'es5',          
//          sourceMap: true,
//          removeComments: false
//      }))
//      .pipe(gulp.dest('./app'))
//});

gulp.task('start', function () {
    var options = {
        continueOnError: false, // default = false, true means don't emit error event 
        pipeStdout: false, // default = false, true means stdout is written to file.contents 
        customTemplatingThing: "test" // content passed to gutil.template() 
    };
    var reportOptions = {
        err: true, // default = true, false means don't write err 
        stderr: true, // default = true, false means don't write stderr 
        stdout: true // default = true, false means don't write stdout 
    }
    gulp.src('./**/**')
      .pipe(exec('npm start', function (err, stdout, stderr) {//<%= file.path %> <%= options.customTemplatingThing %>', options))    
          console.log(stdout);
          console.log(stderr);
      }));
});