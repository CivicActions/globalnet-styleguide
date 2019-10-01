/**
 * @file
 * Task: Used for running all tasks.
 * Usage: gulp
 * @param gulp
 */

module.exports = function (gulp) {
  'use strict';

  // Defualt tasks
  gulp.task('default', gulp.series(
    'sass-lint',
    'sass',
    'js-lint',
    'js-optimize'
  ));
};