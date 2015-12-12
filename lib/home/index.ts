import modConfig from './config';
import {HomeController} from './controller';

let mod = angular.module('crossPlatform.home', [
    'ionic',
    'ui.router'
]);

mod.config(modConfig);
mod.controller('HomeController', HomeController);

export default mod;
