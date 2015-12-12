import 'ionic-sdk/release/js/ionic.bundle';
import App from './app/index';

// Boostrapping the app
angular.element(document).ready(function() {
    angular.bootstrap(document, [App.name]);
});
