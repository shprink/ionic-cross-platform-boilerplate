export default function($stateProvider) {
    'ngInject';
    return $stateProvider.state('app', {
        abstract: true,
        views: {
            '@': {
                template: `<ion-side-menus enable-menu-with-back-views="true">
                    <ion-side-menu-content>
                        <ion-nav-bar class="bar-positive">
                            <ion-nav-back-button></ion-nav-back-button>
                            <ion-nav-buttons side="left">
                                <button menu-toggle="left" class="button button-clear">
                                    <i class="icon ion-navicon-round"></i>
                                </button>
                            </ion-nav-buttons>
                        </ion-nav-bar>
                        <ion-nav-view name="content"></ion-nav-view>
                    </ion-side-menu-content>
                    <ion-side-menu side="left" ui-view="menu"></ion-side-menu>
                </ion-side-menus>`
            }
        }
    });
}
