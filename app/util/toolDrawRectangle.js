System.register(['angular2/core', "./dateFilter", "./AttentionItemFilter"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, dateFilter_1, AttentionItemFilter_1;
    var DrawHallComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dateFilter_1_1) {
                dateFilter_1 = dateFilter_1_1;
            },
            function (AttentionItemFilter_1_1) {
                AttentionItemFilter_1 = AttentionItemFilter_1_1;
            }],
        execute: function() {
            /*
            * Deze Utility component tekent svg objecten. Wordt gebruikt voor de plattegrond van hallen, hal met items en de images van items.
            * */
            /*
             standaard manier om svg rect tekenen
             <rect attr.x={{hall.dimensions.startX}} attr.y={{hall.dimensions.startY}}
             attr.width={{hall.dimensions.width}} attr.height={{hall.dimensions.height}}/>
            
             <text class="hallText" attr.x={{hall.dimensions.startX+5}} attr.y={{hall.dimensions.startY+25}}>  {{hall.name}}</text>
             */
            DrawHallComponent = (function () {
                function DrawHallComponent() {
                    this.now = new Date();
                    this.selected = new core_1.EventEmitter();
                }
                DrawHallComponent.prototype.onSelected = function (hall) {
                    this.selected.emit(hall);
                };
                DrawHallComponent.prototype.onSelectedItem = function (item) {
                    this.selected.emit(item);
                };
                DrawHallComponent.prototype.getRightColor = function (width) {
                    if (width <= 24) {
                        return 'rgb(255,0,0)';
                    }
                    else if (width >= 50) {
                        return 'rgb(0,255,0)';
                    }
                    else {
                        return 'rgb(250,250,0)';
                    }
                };
                DrawHallComponent = __decorate([
                    core_1.Component({
                        selector: 'my-drawn-hall',
                        template: "\n    <div>\n            <svg *ngIf=\"halls\" class=\"myCanvas\">\n             <g *ngFor=\"#hall of halls\"  (click)=\"onSelected(hall)\">\n\n                <image class=\"hallImage\" attr.xlink:href=\"../../img/{{hall.name}}.svg\" xlink:href=\"\"\n                attr.x={{hall.dimensions.startX}} attr.y={{hall.dimensions.startY}}/>\n             </g>\n            </svg>\n            <svg *ngIf=\"hallDetail\" class=\"myCanvas\" id=\"myCanvasHallDetail\"\n               version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink= \"http://www.w3.org/1999/xlink\"\n                attr.max-width={{hallDetail.dimensions.width}} attr.max-height={{hallDetail.dimensions.height}}>\n                <rect x=\"0\" y=\"0\"\n                  attr.width={{hallDetail.dimensions.width}} attr.height={{hallDetail.dimensions.height}} />\n                 <image *ngFor=\"#item of itemsOfHallDetail\" attr.class={{item?.category}}\n                 attr.xlink:href=\"../../img/{{item?.category}}.svg\" xlink:href=\"\"\n                 attr.x={{item.location.startX}} attr.y={{item.location.startY}} (click)=\"onSelectedItem(item)\"\n                 [style.cursor]=\"'pointer'\"/>\n                 <rect *ngFor=\"#item of itemsOfHallDetail\" attr.class=\"{{item?.category}}Bar\"\n                    attr.x={{item.location.startX}} attr.y={{item.location.startY+50}}\n                    attr.width=\"{{(item.nextAction.date | dateFilter: now) | attentionItemFilter: null}}\" height=\"10\"\n                    [style.fill]=\"getRightColor(((item.nextAction.date | dateFilter: now) | attentionItemFilter: null))\"/>\n\n             </svg>\n             <!-- legende -->\n             <div *ngFor=\"#item of itemsOfHallDetail\" class=\"hallDetailLegende\">\n                 <img  class=\"itemIcon\" src=\"../../img/{{item?.category}}.svg\">\n                 <p>   {{item?.category}}  </p>\n             </div>\n\n             <div *ngIf=\"itemDetail\" id=\"itemDetailIcon\">\n                 <img class=\"itemIcon\" src=\"../../img/{{itemDetail?.category}}.svg\"\n                   style=\"height:48px\" x=\"100\" y=\"100\">\n             </div>\n          </div>\n            ",
                        inputs: ['halls', 'hallDetail', 'itemsOfHallDetail', 'itemDetail'],
                        outputs: ['selected'],
                        pipes: [dateFilter_1.DateFilter, AttentionItemFilter_1.AttentionItemFilter]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DrawHallComponent);
                return DrawHallComponent;
            })();
            exports_1("DrawHallComponent", DrawHallComponent);
        }
    }
});
//# sourceMappingURL=toolDrawRectangle.js.map