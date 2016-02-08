System.register(['angular2/core', './component/content.component', "./component/map.component", 'angular2/router', "./component/about.component", "./component/hallDetail.component", "./component/itemDetail.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, content_component_1, map_component_1, router_1, about_component_1, hallDetail_component_1, itemDetail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (content_component_1_1) {
                content_component_1 = content_component_1_1;
            },
            function (map_component_1_1) {
                map_component_1 = map_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (hallDetail_component_1_1) {
                hallDetail_component_1 = hallDetail_component_1_1;
            },
            function (itemDetail_component_1_1) {
                itemDetail_component_1 = itemDetail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-factory-app',
                        template: "\n    <header>\n      <div id=\"banner\"></div>\n    </header>\n       <my-content></my-content>\n  ",
                        directives: [content_component_1.ContentComponent]
                    }),
                    router_1.RouteConfig([
                        // {path:'/', name:'App', component: AppComponent, useAsDefault: true},
                        { path: '/map', name: 'Map', component: map_component_1.MapComponent },
                        { path: '/about', name: 'About', component: about_component_1.AboutComponent },
                        { path: '/hall/:id', name: 'HallDetail', component: hallDetail_component_1.HallDetailComponent },
                        { path: '/hall/:hid/item/:id', name: 'ItemDetail', component: itemDetail_component_1.ItemDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map