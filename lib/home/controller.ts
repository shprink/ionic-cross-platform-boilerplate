import {ICrossPlatformLoading} from '../loading/interface.ts';

export class HomeController {
    constructor(private $injector: ng.auto.IInjectorService, public $scope: ng.IScope, public $crossPlatformLoading: ICrossPlatformLoading) {
        'ngInject';
    }

    showLoading(){
        this.$crossPlatformLoading.show('CrossPlatform Loading');

        setTimeout(() => this.$crossPlatformLoading.hide(), 5000);
    }
}
