# GlobalNET Living Styleguide
This is a component library and living styleguide for the GlobalNET platform. It is based on Patternlab v3 and runs the twig and mustache engines in parallel.
Demo site: TBD

## Developing locally
#### Prerequisites:
NPM
Node

### Getting Started
1. Read through the [Git Workflow](documentation/GIT.md) to clone this repo and setup your fork.
2. Run `npm install gulp` to install Gulp.
3.  Run `npm install` to install other dependencies.
4. Run `npm run patternlab -- serve` to start the Pattern Lab server.
5.  To compile assets and lint files, run `gulp`

#### Scripts:
* `gulp`: Compiles all assets and lints files.
* `gulp watch`: Watches for sass and JS changes and compiles on the fly.
* `npm run patternlab -- serve`: Spins up the patternlab server and opens it up in your browser. Watches for changes to patternlab files.
* `npm run patternlab -- build` Build the PatternLab. Optionally (re-)build only the patterns by adding `-p` or `--patterns-only`.

TO-DO: Add the Pattern-lab scripts to the existing gulp tasks.
