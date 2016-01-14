import {ICrossPlatformLoading} from './interface';

module.exports = class implements ICrossPlatformLoading{
    constructor(private $ionicLoading: ionic.loading.IonicLoadingService){
        'ngInject';
    }
    show(message: string, persistent: boolean){
        this.$ionicLoading.show({
            template: message
        });
    }
    hide(){
        this.$ionicLoading.hide();
    }
}
