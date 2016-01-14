import {ICrossPlatformLoading} from './interface';

module.exports = class implements ICrossPlatformLoading{
    constructor(private $cordovaSpinnerDialog: ionic.loading.IonicLoadingService){
        'ngInject';
    }
    show(message: string, persistent: boolean){
        this.$cordovaSpinnerDialog.show(null, message, true);
    }
    hide(){
        this.$cordovaSpinnerDialog.hide();
    }
}
