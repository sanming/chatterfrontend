System.register(['angular2/core', './map.component', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, map_component_1, router_1;
    var ContentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (map_component_1_1) {
                map_component_1 = map_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            /*
             Deze component is de root van de inhoud van deze SPA.
             */
            ContentComponent = (function () {
                function ContentComponent() {
                    this.choiceMade = false;
                }
                ContentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-content',
                        template: "<section id=\"content\">\n                 <section id=\"menu\">\n                 <div id=\"mapLink\" [routerLink]=\"['Map']\">\n                  Map\n                 </div>\n                 <div id=\"aboutLink\" [routerLink]=\"['About']\">\n                  About\n                 </div>\n                 <div id=\"userLink\">\n                  Login\n                 </div>\n                 </section>\n                   <router-outlet></router-outlet>\n               </section>\n    ",
                        directives: [map_component_1.MapComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContentComponent);
                return ContentComponent;
            })();
            exports_1("ContentComponent", ContentComponent);
        }
    }
});
//# sourceMappingURL=content.component.js.map