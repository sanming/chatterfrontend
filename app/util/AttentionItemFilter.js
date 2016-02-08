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
    var AttentionItemFilter;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /*
            * Deze Pipe controleert of de volgende uitvoering bijna nadert en stuurt een waarde terug die wordt gebruikt voor de width van de balk onder item.
            * */
            AttentionItemFilter = (function () {
                function AttentionItemFilter() {
                }
                AttentionItemFilter.prototype.transform = function (value, args) {
                    //naargelang hoeveel uur
                    var long = 50;
                    var mid = 30;
                    var short = 10;
                    if (value < 24) {
                        return short;
                    }
                    else if (value > 500) {
                        return long;
                    }
                    return mid;
                };
                AttentionItemFilter = __decorate([
                    core_1.Pipe({ name: 'attentionItemFilter' }), 
                    __metadata('design:paramtypes', [])
                ], AttentionItemFilter);
                return AttentionItemFilter;
            })();
            exports_1("AttentionItemFilter", AttentionItemFilter);
        }
    }
});
//# sourceMappingURL=AttentionItemFilter.js.map