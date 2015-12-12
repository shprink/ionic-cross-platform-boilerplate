import 'ionic-sdk/release/js/ionic.bundle';

// Our modules
// import modConstant from './constant.js';
// import modConfigIonic from './config/ionic.config.js';
import modConfigRouter from './router.config.ts';
import modRun from './run.ts';
import modHome from '../home/index.ts';
import modMenu from '../menu/index.ts';

// Style entry point
import '../scss/bootstrap';
// Create our crossPlatform module
let mod = angular.module('crossPlatform', [
    'ionic',
    // modConstant,
    modHome.name,
    modMenu.name
    // modPost
]);
// ROUTER CONFIG
mod.config(modConfigRouter);
// // IONIC CONFIG
// mod.config(modConfigIonic);
// // WordPress CONFIG
// mod.config(modConfigWP);
// Run
mod.run(modRun);

export default mod;
