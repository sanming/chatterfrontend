import {Pipe, PipeTransform} from 'angular2/core';
/*
* Deze Pipe converteert een string datum naar een date-object.
* */
@Pipe({name: 'dateParser'})
export class DateParser implements PipeTransform {
    transform(date:string | Date, args:string[]) : any {
        if(date != Date) {
            var arrdate2 = date.split('-');
            date = new Date(arrdate2[0], arrdate2[1] - 1, arrdate2[2], arrdate2[3], arrdate2[4], arrdate2[5]);
        }
        return date;
    }
}