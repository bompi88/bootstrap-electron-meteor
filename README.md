# bootstrap-electron-meteor
A template for simplifying the process of creating desktop apps with Electron and Meteor.

## History

This project is inspired from [ElectroMeteor](), and more or less just a modified version of that particular setup. This solution takes another approach though, when it comes to building and packaging the app. It uses [electron-packager]() and [electron-builder]() to perform those tasks. This makes it possible to build for all platforms on one machine, even the well known and special `Windows` creature. `Windows` and `OS X` installers can also easily be created, if specified while building.

## Prerequisites
Some dependencies you have to install.

### Meteor.js and Node.js
Install Meteor and Node. It's recommended to use Node `version > 0.12.0` for building and packaging the Electron app.

``` bash
# Install Meteor
$

# install Node
$
```


## Development
Not much is required to set it up for development, you should be up and running in no time. Let's go through the steps.

### Setup
First off, after installing the dependencies mentioned in the prerequisites section, you have to install the Node dependencies of the project:

``` bash
# Install the node dependencies
$ npm install
```
**PS:** You may have to use the `sudo` command if it fails with error.

Next, run the setup script available in the `scripts` folder, which will download the correct Electron version for you.

``` bash
# Install Electron
$ node scripts/setup
```

### Run tha' damn thingy
It's quite easy, just do:

``` bash
# Run ElectronMeteor! Run!
$ node scripts/run
```

## Building and Packaging
This is the critical part, and you may acounter some problems. We all do when it comes to building, and specially with our delicious friend (you know whom), combined with Node's longest paths). Be patient! You can do it! We will cheer you all the way until you make the goal line.

### Only build
**Be aware:** All `npm` scripts shall be run from the root directory.
* Build for all platforms and archs:
  ``` bash
  # Build all
  $ npm run build
  ```

* Build for a specific platform with/without specific arch:
  ``` bash
  # Build only for Windows
  $ npm run build:win

  # Build for Windows with x64
  $ npm run build:win:x64
  ```

### Build and pack it up for dist
This follows the same pattern as for builds. Just substitute `build` with `pack`.

* Pack and build for all platforms and archs:
  ``` bash
  # Build all
  $ npm run build
  ```

* Pack and build for a specific platform with/without specific arch:
  ``` bash
  # Build only for OS X
  $ npm run pack:osx

  # Build for OS X with arch x64
  $ npm run pack:osx:x64
  ```

### The platforms and archs available
* Windows as `win`
  - `ia32`
  - `x64` **(not tested yet)**
* OS X (darwin) as `osx`
  - `x64`
* Linux as `linux`
  - `x64`
  - `ia32` **(not tested yet)**

## Travis
A travis file is included for a typical setup. Just paste in your Github API code under the deployment section.

## Configuration
You may want to substitue `ElectronMeteor` with your app's name in `packager.json`, `package.json` and `ìndex.js`. Futher, all Meteor related code should be inside the `meteor` directory. If you want to use npm modules on the ***client***, just add them in `package.json` under the `dependencies` section. The `require` thingy is available on the client, so you can do something like:

``` js
var fs = require('fs');
...
```

On the ***server*** use `Npm.require` as in a normal Meteor app.

## Contributing
