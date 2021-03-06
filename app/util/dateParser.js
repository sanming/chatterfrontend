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
    var DateParser;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /*
            * Deze Pipe converteert een string datum naar een date-object.
            * */
            DateParser = (function () {
                function DateParser() {
                }
                DateParser.prototype.transform = function (date, args) {
                    if (date != Date) {
                        var arrdate2 = date.split('-');
                        date = new Date(arrdate2[0], arrdate2[1] - 1, arrdate2[2], arrdate2[3], arrdate2[4], arrdate2[5]);
                    }
                    return date;
                };
                DateParser = __decorate([
                    core_1.Pipe({ name: 'dateParser' }), 
                    __metadata('design:paramtypes', [])
                ], DateParser);
                return DateParser;
            })();
            exports_1("DateParser", DateParser);
        }
    }
});
//# sourceMappingURL=dateParser.js.map