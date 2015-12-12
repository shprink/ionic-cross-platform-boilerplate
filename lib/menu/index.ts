import modConfig from './config';

let mod = angular.module('crossPlatform.menu', [
    'ionic',
    'ui.router'
]);

mod.config(modConfig);

export default mod;
