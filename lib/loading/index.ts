let crossPlatformLoading;

if (IS_IOS)
    crossPlatformLoading = require("./service.cordova.ts");
if (IS_ANDROID)
    crossPlatformLoading = require("./service.cordova.ts");
if (IS_BROWSER)
    crossPlatformLoading = require("./service.ionic.ts");
if (IS_DESKTOP)
    crossPlatformLoading = require("./service.ionic.ts");

let mod = angular.module('crossPlatform.loading', [
    'ionic'
]);

mod.service('$crossPlatformLoading', crossPlatformLoading);

export default mod;
