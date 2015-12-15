export default function($log, $rootScope:ng.IRootScopeService) {
    'ngInject';
    $log.info('crossPlatform running');

    // $rootScope.$on('$cordovaBatteryStatus:status', function(result) {
    //     console.log('$cordovaBatteryStatus:status')
    //     var batteryLevel = result.level;       // (0 - 100)
    //     var isPluggedIn = result.isPlugged;   // bool
    // });
    //
    // $rootScope.$on('$cordovaBatteryStatus:critical', function(result) {
    //     console.log('$cordovaBatteryStatus:critical')
    //     var batteryLevel = result.level;       // (0 - 100)
    //     var isPluggedIn = result.isPlugged;   // bool
    // });
    //
    // $rootScope.$on('$cordovaBatteryStatus:low', function(result) {
    //     console.log('$cordovaBatteryStatus:low')
    //     var batteryLevel = result.level;       // (0 - 100)
    //     var isPluggedIn = result.isPlugged;   // bool
    // });
}
