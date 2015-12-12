export default function($stateProvider) {
    'ngInject';
    $stateProvider.decorator('views', (state, parent) => {
        let views = parent(state);
        if (state.name === 'app') {
            views['menu@app'] = {
                template: require("./index.html")
            };
        }
        return views;
    });
}
