/**
 * @file
 * Task: Compile: Sass.
 */

module.exports = function(gulp, options, plugins) {
  'use strict';

  gulp.task('sass', function() {
    return gulp.src([
        options.sass.sassFiles,
        options.sass.plFiles
      ])

      .pipe(plugins.sourcemaps.init()) //Sourcemaps can turned off for prod. Comment this line and the sourcemaps line below if needed.
      .pipe(plugins.sassglob())
      .pipe(plugins.sass({
        outputStyle: 'compact', // compressed is the best option here but needs sourcemaps turned off for it to work.
      
      }).on('error', plugins.sass.logError))
      .pipe(plugins.prefix({
        cascade: false
      }))

      //.pipe(plugins.gcmq())
      .pipe(plugins.concat('styles.css'))
      .pipe(plugins.sourcemaps.write())
      .pipe(gulp.dest(options.css.cssFiles));
  });
};
