System.register(['./lib/angular2/platform/browser', './navigation.component'], function(exports_1) {
    var browser_1, navigation_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (navigation_component_1_1) {
                navigation_component_1 = navigation_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(navigation_component_1.NavigationComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map