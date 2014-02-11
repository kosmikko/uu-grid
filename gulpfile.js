var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('styl', function () {
  gulp.src('./src/styles/*.styl')
    .pipe(stylus({use: ['nib']}))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function(){
  gulp.watch('src/**' , function(ev){
    gulp.run('styl')
  });
});