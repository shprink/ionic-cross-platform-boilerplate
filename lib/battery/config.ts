export default function($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
    'ngInject';
    $stateProvider.state('app.battery', {
        url: "/battery",
        views: {
            'content@app': {
                template: require("./index.html"),
                controller: "BatteryController as batteryCtrl"
            }
        }
    });
}
