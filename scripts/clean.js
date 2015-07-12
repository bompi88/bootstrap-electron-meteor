////////////////////////////////////////////////////////////////////////////////
// Clean a specific build
////////////////////////////////////////////////////////////////////////////////

'use strict';

require('shelljs/global');
require('colors');
var path = require('path');
var rmdir = require('rimraf');

// Auto-exit on errors
config.fatal = true;

// -- Determine the platform and arch running ----------------------------------

var args = require('minimist')(process.argv.slice(2));

var platform = args.platform;
var arch = args.arch;

if(!platform) {
  throw new Error('Platform not specified...'.bold.red);
}

if(!arch) {
  throw new Error('Architecture not specified...'.bold.red);
}

echo('-----> Removing build...'.yellow + '(platform: ' + platform + ', arch: ' + arch + ')');

// -- Set up some paths --------------------------------------------------------

var dir = __dirname;
var base = path.normalize(path.join(dir, '..'));

// -- Helpers ------------------------------------------------------------------

var removeDir = function(path) {
  rmdir(path, {
    maxBusyTries: 10
  }, function(error) {

    if (error) {
      console.log(error);
    }
  });
};

// -- Remove build -------------------------------------------------------------

platform = (platform === 'darwin') ? 'osx' : platform;
platform = (platform === 'win32') ? 'windows' : platform;
removeDir(base + '/dist/' + platform + '/' + arch);
