System.register(['angular2/core', "../service/hall.service", 'angular2/router', '../util/toolDrawRectangle'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hall_service_1, router_1, toolDrawRectangle_1;
    var MapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hall_service_1_1) {
                hall_service_1 = hall_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (toolDrawRectangle_1_1) {
                toolDrawRectangle_1 = toolDrawRectangle_1_1;
            }],
        execute: function() {
            /*
             Deze component geeft de verschillende hallen weer die uitgelezen werd via de HallService.
             Een plattegrond of een lijst kan weergegeven worden.
             */
            MapComponent = (function () {
                function MapComponent(router, hallService) {
                    this.router = router;
                    this.hallService = hallService;
                    this.listViewChoices = ["Plattegrond", "Lijst"];
                    this.showList = false;
                }
                MapComponent.prototype.ngOnInit = function () {
                    this.getHalls();
                };
                MapComponent.prototype.getHalls = function () {
                    var _this = this;
                    this.hallService.getHalls().subscribe(function (halls) {
                        _this.halls = halls;
                    });
                };
                MapComponent.prototype.selectChoiceView = function (choice) {
                    if (choice == this.listViewChoices[0]) {
                        this.showList = false;
                    }
                    else {
                        this.showList = true;
                    }
                };
                MapComponent.prototype.onSelectSpecificHall = function (hall) {
                    this.router.navigate(['/HallDetail', { id: hall.id }]);
                };
                MapComponent = __decorate([
                    core_1.Component({
                        selector: 'my-map',
                        template: "<section id=\"viewToolbar\">\n                 <ul>\n                   <li *ngFor=\"#choice of listViewChoices\"\n                    (click)=\"selectChoiceView(choice)\"\n                   >{{choice}}</li>\n                 </ul>\n               </section>\n               <section *ngIf=\"!showList\" id=\"drawnMap\">\n               <h1 class=\"contentTitle\">Kaart</h1>\n                  <my-drawn-hall [halls]=\"halls\" (selected)=\"onSelectSpecificHall($event)\"\n                  ></my-drawn-hall>\n               </section>\n               <section *ngIf=\"showList\" id=\"listMap\">\n                <h1 class=\"contentTitle\">Lijst</h1>\n                 <ol class=\"listOfHalls\">\n                   <li *ngFor=\"#hall of halls\" (click)=\"onSelectSpecificHall(hall)\">\n                   {{hall.name}}</li>\n                 </ol>\n               </section>\n    ",
                        directives: [toolDrawRectangle_1.DrawHallComponent],
                        providers: [hall_service_1.HallService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, hall_service_1.HallService])
                ], MapComponent);
                return MapComponent;
            })();
            exports_1("MapComponent", MapComponent);
        }
    }
});
//# sourceMappingURL=map.component.js.map