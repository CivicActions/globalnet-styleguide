/* -------------------------------
 Available Tasks
 ------------------------------- */
// gulp                     -- Lints js & sass. Compiles sass. Minifies and cleans up JS files.
// gulp build               -- Task for frontend:build. Lints JS & Sass, compiles sass & generates patternlab.
// gulp sass                -- Compiles Sass Files.
// gulp sass-for-build      -- Compiles sass files & minifies the resulting CSS
// gulp sass-lint           -- Lints Sass Files.
// gulp js-lint             -- Lints JS files.
// gulp js-optimize         -- Minifies JS files
// gulp watch               -- Lints & Watches sass changes .
//

var gulp = require('gulp');

// == PLUGINS ====
/** This uses the gulp load plugin npm library to avoid having to declare
 * each plugin you use with "var plugin = require('gulp-plugin`)".
 * It also lazy-loads plugins depending on what is being used by the task being run.
 * NPM: https://www.npmjs.com/package/gulp-load-plugins
 * Learn more: https://andy-carter.com/blog/automatically-load-gulp-plugins-with-gulp-load-plugins 
 */

var plugins = require('gulp-load-plugins')({
  pattern: ['*', 'gulp-*', '@*/gulp{-,.}*'],
  rename: {
    'gulp-autoprefixer'            : 'prefix', // Adds browser prefixes where needed
    'gulp-group-css-media-queries' : 'gcmq',   // This will group media queries together in compiled CSS.
    'gulp-sass-glob'               : 'sassglob', // Allows you to compile all sass partials under a given directory
    'gulp-eslint'                  : 'eslint', // Lints JS syntax
    'postcss-clean'                : 'clean', // Minifies & cleans up CSS
    'gulp-sourcemaps'              : 'sourcemaps'
  }
});

// == DIRECTORIES ==
var sassFiles       = 'source/sass/**/*.scss'; // replace this with the path to your sass directory.
var patternLabFiles = 'source/_patterns/**/*.scss'; // Replace with top level PL directory if any
var cssDir          = 'source/css'; // Replace with path to CSS dir
var optimizedJSDir  = 'source/js'; // Directory for minified JS files
var jsDir           = 'source/js/src/*.js'; // Source directory for JS

'use strict';
var options = {

  //-------- SASS ---------------
  sass: {
    sassFiles: sassFiles,
    plFiles:   patternLabFiles
  },

  //--------- CSS ---------------
  css: {
    cssFiles: cssDir
  },

  //--------- JS ---------------
  js: {
    jsFiles: jsDir,
    optimizedDir: optimizedJSDir
  }
};
// Tasks
require('./gulp-tasks/sass')(gulp, options, plugins);
require('./gulp-tasks/sass-lint')(gulp, options, plugins);
require('./gulp-tasks/js-lint')(gulp, options, plugins);
require('./gulp-tasks/js-optimize')(gulp, options, plugins);
require('./gulp-tasks/watch')(gulp, options, plugins);
require('./gulp-tasks/default')(gulp, options, plugins);
