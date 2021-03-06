[![Stories in Ready](https://badge.waffle.io/mesosphere/marathon.png?label=ready,gui&title=Ready)](https://waffle.io/mesosphere/marathon?label=gui)
# Marathon UI [![Build Status](https://travis-ci.org/mesosphere/marathon-ui.png?branch=master)](https://travis-ci.org/mesosphere/marathon-ui) [![Teamcity Snapshot UI Webjar Build Status](https://teamcity.mesosphere.io/app/rest/builds/buildType:%28id:Oss_Marathon_SnapshotUiWebjar%29/statusIcon)](https://teamcity.mesosphere.io/viewType.html?buildTypeId=Oss_Marathon_SnapshotUiWebjar&guest=1)

## The web user interface for Mesosphere's Marathon

The UI is bundled with the [Marathon](https://github.com/mesosphere/marathon) package.

Please note that issues are disabled for this repository. Please feel free to open an issue on the
[issues page on the main Marathon Repository](https://github.com/mesosphere/marathon/issues?q=is%3Aopen+is%3Aissue+label%3Agui).

#### Setup

If you want to start development on the Marathon UI please follow these steps.

1. Install [NPM](https://npmjs.org/)

2. Install dev dependencies

        npm install
        npm install -g gulp

3. Override development configuration

    1. Copy `src/js/config/config.template.js` to `src/js/config/config.dev.js`
    2. Override variables in `config.dev.js` to reflect your local development configuration

4. Run development environment

        npm run serve

#### Contributing to this project

Please refer to the [CONTRIBUTING.md](https://github.com/mesosphere/marathon-ui/blob/master/CONTRIBUTING.md) file.
