/**
 * @file
 * Task: Optimize JS files
 */

module.exports = function(gulp, options, plugins) {
  "use strict";

  gulp.task('js-optimize', function() {
    return gulp.src([
      options.js.jsFiles
    ])
      .pipe(plugins.uglify())
      .pipe(plugins.rename({ suffix: '.min'}))
      .pipe(gulp.dest([options.js.optimizedDir]))
  });
};
