export class NetworkController {

    network: string;
    isOnline: boolean;

    constructor(public $scope: ng.IScope, private $log: ng.ILogService, private $rootScope: ng.IRootScopeService, private $cordovaNetwork: ngCordova.INetworkInformationService) {
        'ngInject';

        this.$scope = $scope;
        this.$cordovaNetwork = $cordovaNetwork;
        this.$log = $log;

        this.$scope.$on('$ionicView.enter', () => this.onEnter());

        // listen for Online event
        $rootScope.$on('$cordovaNetwork:online', angular.bind(this, (event, networkState) => {
            this.$log.debug('$cordovaNetwork:online', networkState);
            this.network = networkState;
            this.isOnline = true;
        }));

        // listen for Offline event
        $rootScope.$on('$cordovaNetwork:offline', angular.bind(this, (event, networkState) => {
            this.$log.debug('$cordovaNetwork:offline', networkState);
            this.network = networkState;
            this.isOnline = false;
        }));
    }

    onEnter() {
        this.$log.debug('[Network] onEnter');
        this.network = this.$cordovaNetwork.getNetwork();
        this.isOnline = (this.network != Connection.NONE);
    }
}
