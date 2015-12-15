import 'ionic-sdk/release/js/ionic.bundle';
import 'ng-cordova';

// Our modules
import modConfigRouter from './router.config.ts';
import modRun from './run.ts';
import modHome from '../home/index.ts';
// import modBattery from '../battery/index.ts';
// import modCamera from '../camera/index.ts';
import modNetwork from '../network/index.ts';
import modMenu from '../menu/index.ts';

// Style entry point
import '../scss/bootstrap';

// Create our crossPlatform module
let mod = angular.module('crossPlatform', [
    'ionic',
    'ngCordova',
    modHome.name,
    modMenu.name,
    // modBattery.name,
    // modCamera.name,
    modNetwork.name
]);
// ROUTER CONFIG
mod.config(modConfigRouter);
// Run
mod.run(modRun);

export default mod;
