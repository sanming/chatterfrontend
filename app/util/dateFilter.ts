import {Pipe, PipeTransform} from 'angular2/core';
/*
*  Deze Pipe stuurt het aantal uren terug tussen de huidige tijd en de meegegeven datum(parameter).
* */
@Pipe({name: 'dateFilter'})
export class DateFilter implements PipeTransform {
    transform(date:string | Date, args:string[]) : any {
        var arrdate2 = date.split('-');
        //jaar, maand, dag, uur, min, sec
        var date1: any = args[0];
        var date2: any;
        date2 = new Date(arrdate2[0], arrdate2[1]-1,arrdate2[2],arrdate2[3],arrdate2[4],arrdate2[5]);

        var hours = Math.abs(date1 - date2) / 36e5;

        return hours;
    }
}