import {Pipe, PipeTransform} from 'angular2/core';
/*
* Deze Pipe controleert of de volgende uitvoering bijna nadert en stuurt een waarde terug die wordt gebruikt voor de width van de balk onder item.
* */
@Pipe({name: 'attentionItemFilter'})
export class AttentionItemFilter implements PipeTransform {
    transform(value: string | number, args:string[]) : any {

        //naargelang hoeveel uur
        var long: number = 50;
        var mid: number = 30;
        var short: number = 10;

        if(value < 24){
            return short;
        }else if (value > 500){
            return long;
        }

        return mid;
    }
}