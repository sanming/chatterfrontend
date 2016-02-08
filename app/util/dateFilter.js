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
    var DateFilter;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /*
            *  Deze Pipe stuurt het aantal uren terug tussen de huidige tijd en de meegegeven datum(parameter).
            * */
            DateFilter = (function () {
                function DateFilter() {
                }
                DateFilter.prototype.transform = function (date, args) {
                    var arrdate2 = date.split('-');
                    //jaar, maand, dag, uur, min, sec
                    var date1 = args[0];
                    var date2;
                    date2 = new Date(arrdate2[0], arrdate2[1] - 1, arrdate2[2], arrdate2[3], arrdate2[4], arrdate2[5]);
                    var hours = Math.abs(date1 - date2) / 36e5;
                    return hours;
                };
                DateFilter = __decorate([
                    core_1.Pipe({ name: 'dateFilter' }), 
                    __metadata('design:paramtypes', [])
                ], DateFilter);
                return DateFilter;
            })();
            exports_1("DateFilter", DateFilter);
        }
    }
});
//# sourceMappingURL=dateFilter.js.map