/**
 * @file
 * Task: Lint JS.
 * SOurce: https://cloudfour.com/thinks/getting-started-with-the-prettier-plugin-for-eslint/
 */

module.exports = function(gulp, options, plugins) {
  'use strict';

  // Set up JS lint
  gulp.task('js-lint', function() {
    return gulp.src([options.js.jsFiles, '!node_modules/**'])
      // eslint() attaches the lint output to the "eslint" property
      // of the file object so it can be used by other modules.
      .pipe(plugins.eslint())
      .pipe(plugins.eslint.format())
      .pipe(plugins.eslint.failAfterError());
  });
};
