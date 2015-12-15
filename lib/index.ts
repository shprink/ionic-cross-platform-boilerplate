import 'ionic-sdk/release/js/ionic.bundle';
import App from './app/index';

// Import the electron(desktop) bootstrap file
import '!file?name=[name].js!./index.desktop.js';

// Boostrapping the app
// Only works on cordovas platforms
document.addEventListener("deviceready", () => angular.bootstrap(document, [App.name]), false);
