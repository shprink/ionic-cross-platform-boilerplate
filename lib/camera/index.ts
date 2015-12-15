import modConfig from './config';
import {CameraController} from './controller';

let mod = angular.module('crossPlatform.camera', [
    'ionic',
    'ui.router'
]);

mod.config(modConfig);
mod.controller('CameraController', CameraController);

export default mod;
