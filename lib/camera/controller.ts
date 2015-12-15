interface ICameraControllerScope extends ng.IScope {
    takePicture(): void;
}

export class CameraController {

    $injector: ng.auto.IInjectorService;
    $scope: ICameraControllerScope;
    $cordovaCamera: ngCordova.ICameraService;
    $log: ng.ILogService;

    constructor($injector: ng.auto.IInjectorService, $scope: ICameraControllerScope) {
        'ngInject';

        this.$injector = $injector;
        this.$scope = $scope;
        this.$log = this.$injector.get('$log');
        this.$cordovaCamera = this.$injector.get('$cordovaCamera');
        this.picture = null;

        this.$scope.$on('$ionicView.enter', () => this.onEnter());
    }

    onEnter() {
        this.$log.debug('[Camera] onEnter');
    }

    takePicture() {
        this.$log.debug('takePicture');
        var options = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: false,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 100,
            targetHeight: 100,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };

        this.$cordovaCamera.getPicture(options).then(angular.bind(this, (imageData) => {
            this.$log.debug('imageData', imageData);
            this.picture = "data:image/jpeg;base64," + imageData;
        }, function(err) {
                this.$log.debug('getPicture error', err);
            }));
    }

}
