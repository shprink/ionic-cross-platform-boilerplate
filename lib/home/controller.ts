import {IController} from '../interfaces/index';

interface IHomeControllerScope extends ng.IScope {

}

export class HomeController implements IController {

    $injector: ng.auto.IInjectorService;
    $scope: IHomeControllerScope;

    constructor($injector: ng.auto.IInjectorService, $scope: IHomeControllerScope) {
        'ngInject';

        this.$injector = $injector;
        this.$scope = $scope;
    }

}
