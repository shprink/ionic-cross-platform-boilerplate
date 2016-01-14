import modConfig from './config';
import {HomeController} from './controller';
import modLoading from '../loading/index.ts';

let mod = angular.module('crossPlatform.home', [
    'ionic',
    'ui.router',
    modLoading.name
]);

mod.config(modConfig);
mod.controller('HomeController', HomeController);

export default mod;
