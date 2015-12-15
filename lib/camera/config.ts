export default function($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
    'ngInject';
    $stateProvider.state('app.camera', {
        url: "/camera",
        views: {
            'content@app': {
                template: require("./index.html"),
                controller: "CameraController as cameraCtrl"
            }
        }
    });
}
