import modConfig from './config';
import {BatteryController} from './controller';

let mod = angular.module('crossPlatform.battery', [
    'ionic',
    'ui.router'
]);

mod.config(modConfig);
mod.controller('BatteryController', BatteryController);

export default mod;
