System.register(['angular2/core', "../service/hall.service", "../service/item.service", 'angular2/router', "../util/toolDrawRectangle"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hall_service_1, item_service_1, router_1, toolDrawRectangle_1;
    var HallDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hall_service_1_1) {
                hall_service_1 = hall_service_1_1;
            },
            function (item_service_1_1) {
                item_service_1 = item_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (toolDrawRectangle_1_1) {
                toolDrawRectangle_1 = toolDrawRectangle_1_1;
            }],
        execute: function() {
            /*
             Deze component beschrijft de details van een bepaalde hall. De ID wordt uitgelezen via de URL en gaat via de geïnjecteerde service deze
             hall opvragen
            */
            HallDetailComponent = (function () {
                function HallDetailComponent(router, routeParams, hallService, itemService) {
                    this.router = router;
                    this.routeParams = routeParams;
                    this.hallService = hallService;
                    this.itemService = itemService;
                    this.itemsOfSelectedHall = [];
                    this.users = [];
                }
                HallDetailComponent.prototype.ngOnInit = function () {
                    var id = this.routeParams.get('id');
                    this.getSpecificHall(id);
                };
                HallDetailComponent.prototype.getSpecificHall = function (id) {
                    var _this = this;
                    this.hallService.getHall(id).subscribe(function (hall) {
                        _this.selectedHall = hall;
                        _this.getItems();
                    });
                    this.hallService.getUsers().subscribe(function (users) {
                        _this.users = users;
                    });
                };
                HallDetailComponent.prototype.getItems = function () {
                    var _this = this;
                    if (this.selectedHall != null) {
                        // itemList op null zetten voor dat er toegeveogd wordt?
                        for (var i = 0; i < this.selectedHall.itemsId.length; i++) {
                            var id = this.selectedHall.itemsId[i];
                            this.itemService.getItem(id).subscribe(function (item) {
                                _this.itemsOfSelectedHall.push(item);
                            });
                        }
                    }
                };
                HallDetailComponent.prototype.onSelectItem = function (item) {
                    this.router.navigate(['/ItemDetail', { hid: this.selectedHall.id, id: item.productNo }]);
                };
                HallDetailComponent = __decorate([
                    core_1.Component({
                        template: "\n             <section id=\"hallDetailWithItems\">\n             <div class=\"hallDetailInfo\">\n               <h1 class=\"contentTitle\">Hal overzicht</h1>\n               <div id=\"hallDetailInfo\">\n                <p>Naam: {{selectedHall?.name}} Hal</p>\n                <p>Items: {{selectedHall?.amountItems}}</p>\n                <p>Aandacht nodig: {{selectedHall?.amountItemsNeedAttention}}</p>\n                <p>opp: {{selectedHall?.area}}</p>\n                <p *ngFor=\"#user of users\">\n                   username: {{user.username}}</p>\n               </div>\n\n             </div>\n               <my-drawn-hall [hallDetail]=\"selectedHall\" [itemsOfHallDetail]=\"itemsOfSelectedHall\" (selected)=\"onSelectItem($event)\"></my-drawn-hall>\n             </section>\n    ",
                        directives: [toolDrawRectangle_1.DrawHallComponent],
                        providers: [hall_service_1.HallService, item_service_1.ItemService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, hall_service_1.HallService, item_service_1.ItemService])
                ], HallDetailComponent);
                return HallDetailComponent;
            })();
            exports_1("HallDetailComponent", HallDetailComponent);
        }
    }
});
//# sourceMappingURL=hallDetail.component.js.map