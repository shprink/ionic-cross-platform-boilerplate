export default function($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
    'ngInject';
    $stateProvider.state('app.network', {
        url: "/network",
        views: {
            'content@app': {
                template: require("./index.html"),
                controller: "NetworkController as networkCtrl"
            }
        }
    });
}
