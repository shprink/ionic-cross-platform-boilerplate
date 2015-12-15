import {IController} from '../interfaces/index';

interface IBatteryControllerScope extends ng.IScope {
    batteryLevel: number;
    isPluggedIn: boolean
}

export class BatteryController implements IController {

    $injector: ng.auto.IInjectorService;
    $scope: IBatteryControllerScope;

    constructor($injector: ng.auto.IInjectorService, $scope: IBatteryControllerScope, $rootScope:ng.IRootScopeService) {
        'ngInject';

        this.$injector = $injector;
        this.$scope = $scope;

        $rootScope.$on('$cordovaBatteryStatus:status', function(result) {
            console.log('$cordovaBatteryStatus:status')
            var batteryLevel = result.level;       // (0 - 100)
            var isPluggedIn = result.isPlugged;   // bool
        });

        $rootScope.$on('$cordovaBatteryStatus:critical', function(result) {
            console.log('$cordovaBatteryStatus:critical')
            var batteryLevel = result.level;       // (0 - 100)
            var isPluggedIn = result.isPlugged;   // bool
        });

        $rootScope.$on('$cordovaBatteryStatus:low', function(result) {
            console.log('$cordovaBatteryStatus:low')
            var batteryLevel = result.level;       // (0 - 100)
            var isPluggedIn = result.isPlugged;   // bool
        });
    }

}
