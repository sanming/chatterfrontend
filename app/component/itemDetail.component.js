System.register(['angular2/core', 'angular2/router', "../service/item.service", "../model/enumCategory", "../model/enumActionType", "../util/dateParser", "../util/toolDrawRectangle"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, item_service_1, enumCategory_1, enumActionType_1, dateParser_1, toolDrawRectangle_1;
    var ItemDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (item_service_1_1) {
                item_service_1 = item_service_1_1;
            },
            function (enumCategory_1_1) {
                enumCategory_1 = enumCategory_1_1;
            },
            function (enumActionType_1_1) {
                enumActionType_1 = enumActionType_1_1;
            },
            function (dateParser_1_1) {
                dateParser_1 = dateParser_1_1;
            },
            function (toolDrawRectangle_1_1) {
                toolDrawRectangle_1 = toolDrawRectangle_1_1;
            }],
        execute: function() {
            /*
             Deze component beschrijft de details van een bepaald item. De ID wordt uitgelezen via de URL en gaat via de geïnjecteerde service
             dit item ophalen.
             */
            ItemDetailComponent = (function () {
                function ItemDetailComponent(routeParams, itemService) {
                    this.routeParams = routeParams;
                    this.itemService = itemService;
                    this.categories = [enumCategory_1.Category.MACHINE, enumCategory_1.Category.BAND, enumCategory_1.Category.LAMP];
                    this.actionTypes = [enumActionType_1.ActionType.VERVANGING, enumActionType_1.ActionType.NAZICHT];
                }
                ItemDetailComponent.prototype.ngOnInit = function () {
                    var id = this.routeParams.get('id');
                    this.getSpecificItem(id);
                };
                ItemDetailComponent.prototype.getSpecificItem = function (id) {
                    var _this = this;
                    this.itemService.getItem(id).subscribe(function (item) {
                        _this.selectedItem = item;
                        _this.tempItem = item;
                    });
                };
                ItemDetailComponent.prototype.saveItem = function () {
                    if (this.selectedItem != null) {
                        var jsonResult = JSON.stringify(this.selectedItem);
                        alert(jsonResult);
                    }
                    else {
                        alert('Error! Geen item geselecteerd.');
                    }
                };
                ItemDetailComponent.prototype.revertItem = function () {
                    if (this.selectedItem != null && this.tempItem != null) {
                        this.selectedItem = this.tempItem;
                        alert("reverted");
                    }
                };
                ItemDetailComponent.prototype.performNextAction = function () {
                    if (this.selectedItem != null) {
                        if (this.selectedItem.nextAction.date != null) {
                            this.selectedItem.lastPerformedAction.date = new Date();
                            this.selectedItem.lastPerformedAction.type = this.selectedItem.nextAction.type;
                            this.selectedItem.lastPerformedAction.description = this.selectedItem.nextAction.description;
                            this.selectedItem.nextAction.date = null;
                            this.selectedItem.nextAction.type = null;
                            this.selectedItem.nextAction.description = null;
                        }
                        else {
                            alert('Error! Volgende uitvoering is leeg.');
                        }
                    }
                };
                ItemDetailComponent = __decorate([
                    core_1.Component({
                        template: "\n            <section id=\"itemDetail\">\n              <h1 class=\"contentTitle\">Item overzicht</h1>\n              <p>{{selectedItem?.category}}: {{selectedItem?.productNo}}</p>\n              <div *ngIf=\"selectedItem\">\n               <div id=\"itemDetailToolbar\">\n                  <my-drawn-hall [itemDetail]=\"selectedItem\"></my-drawn-hall>\n                  <button type=\"submit\" class=\"btnActionPerformed\" (click)=\"performNextAction()\" width=\"60\" height=\"25\">Actie uitgevoerd</button>\n               </div>\n               <form>\n                <div class=\"form-group\">\n                  <label for=\"category\">Categorie</label>\n                  <select class=\"categoryForm-control\" required [(ngModel)]=\"selectedItem.category\">\n                    <option *ngFor=\"#c of categories\" selected [value]=\"c\">{{c}}</option>\n                  </select>\n                </div>\n                  <div class=\"form-group\">\n                    <label for=\"productNo\">ProductNo</label>\n                    <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"selectedItem.productNo\">\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"hallId\">HallId</label>\n                      <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"selectedItem.hallId\">\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"name\">Naam</label>\n                      <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"selectedItem.name\">\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"description\">Beschrijving</label>\n                      <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"selectedItem.description\">\n                  </div>\n\n                  <section class=\"itemAction\" id=\"lastPerformedActionForm\">\n                    <div class=\"form-group\">\n                      <label for=\"lastPerformedActionDate\">Laatst uitgevoerd op</label>\n                      <input type=\"text\" class=\"form-control\" readonly value=\"selectedItem.lastPerformedAction?.date | dateParser: null\" [(ngModel)]=\"selectedItem.lastPerformedAction.date\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"actionType\">Type</label>\n                      <input type=\"text\" class=\"form-control\" readonly [(ngModel)]=\"selectedItem.lastPerformedAction.type\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"descriptionLastPerformedAction\">Beschrijving</label>\n                      <input type=\"text\" class=\"form-control\" readonly [(ngModel)]=\"selectedItem.lastPerformedAction.description\">\n                    </div>\n                  </section>\n                  <section class=\"itemAction\"  id=\"nextActionForm\">\n                    <div class=\"form-group\">\n                      <label for=\"nextAction\">Volgende uitvoering op</label>\n                      <input type=\"text\" class=\"form-control\" value=\"selectedItem.nextAction?.date | dateParser: null\" [(ngModel)]=\"selectedItem.nextAction.date\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"actionType\">Type</label>\n                      <select class=\"form-control\"  selected=\"selectedItem.nextAction?.type\">\n                        <option *ngFor=\"#at of actionTypes\" [value]=\"at\" >{{at}}</option>\n                      </select>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"descriptionNextAction\">Beschrijving</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedItem.nextAction.description\">\n                    </div>\n                  </section>\n                  <button type=\"submit\" class=\"btnSubmit\" (click)=\"saveItem()\">Submit</button>\n                  <button type=\"reset\" class=\"btnRevert\" (click)=\"revertItem()\">Revert</button>\n               </form>\n              </div>\n             <div *ngIf=\"!selectedItem\">\n               ITEM NOT FOUND\n             </div>\n            </section>\n    ",
                        directives: [toolDrawRectangle_1.DrawHallComponent],
                        providers: [item_service_1.ItemService],
                        pipes: [dateParser_1.DateParser]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, item_service_1.ItemService])
                ], ItemDetailComponent);
                return ItemDetailComponent;
            })();
            exports_1("ItemDetailComponent", ItemDetailComponent);
        }
    }
});
/*
    </div>*/ 
//# sourceMappingURL=itemDetail.component.js.map