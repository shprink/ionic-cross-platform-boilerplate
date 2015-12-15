import modConfig from './config';
import {NetworkController} from './controller';

let mod = angular.module('crossPlatform.network', [
    'ionic',
    'ui.router'
]);

mod.config(modConfig);
mod.controller('NetworkController', NetworkController);

export default mod;
