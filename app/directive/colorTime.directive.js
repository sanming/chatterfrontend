System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ColorTimeDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /*
             Deze custom directive dient om de juiste kleur te selecteren wanneer een item dringend gecontroleerd/vervangen moet worden.
             (wordt niet meer gebruikt)
             */
            ColorTimeDirective = (function () {
                function ColorTimeDirective(el, renderer) {
                    this.el = el;
                    this.renderer = renderer;
                    this.setColor();
                }
                ColorTimeDirective.prototype.setColor = function () {
                    alert(this.width);
                    var width2 = parseInt(this.width); // parseInt(this.width);
                    if (width2 < 24) {
                        this.color = 'rgb(255,0,0)';
                        this.renderer.setElementStyle(this.el, 'fill', this.color);
                    }
                    else if (width2 > 240) {
                        this.color = 'rgb(0,255,0)';
                        this.renderer.setElementStyle(this.el, 'fill', this.color);
                    }
                    else {
                        this.color = 'rgb(250,250,0)';
                        this.renderer.setElementStyle(this.el, 'fill', this.color);
                    }
                };
                __decorate([
                    core_1.Input('myColorTime'), 
                    __metadata('design:type', String)
                ], ColorTimeDirective.prototype, "width", void 0);
                ColorTimeDirective = __decorate([
                    core_1.Directive({
                        selector: '[myColorTime]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], ColorTimeDirective);
                return ColorTimeDirective;
            })();
            exports_1("ColorTimeDirective", ColorTimeDirective);
        }
    }
});
//# sourceMappingURL=colorTime.directive.js.map