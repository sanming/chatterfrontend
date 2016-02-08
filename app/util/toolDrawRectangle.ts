import {Component, EventEmitter} from 'angular2/core';
import {Hall} from "../model/hall";
import {DateFilter} from "./dateFilter";
import {AttentionItemFilter} from "./AttentionItemFilter";
import {Item} from "../model/item";
/*
* Deze Utility component tekent svg objecten. Wordt gebruikt voor de plattegrond van hallen, hal met items en de images van items.
* */


/*
 standaard manier om svg rect tekenen
 <rect attr.x={{hall.dimensions.startX}} attr.y={{hall.dimensions.startY}}
 attr.width={{hall.dimensions.width}} attr.height={{hall.dimensions.height}}/>

 <text class="hallText" attr.x={{hall.dimensions.startX+5}} attr.y={{hall.dimensions.startY+25}}>  {{hall.name}}</text>
 */
@Component({
    selector: 'my-drawn-hall',
    template: `
    <div>
            <svg *ngIf="halls" class="myCanvas">
             <g *ngFor="#hall of halls"  (click)="onSelected(hall)">

                <image class="hallImage" attr.xlink:href="../../img/{{hall.name}}.svg" xlink:href=""
                attr.x={{hall.dimensions.startX}} attr.y={{hall.dimensions.startY}}/>
             </g>
            </svg>
            <svg *ngIf="hallDetail" class="myCanvas" id="myCanvasHallDetail"
               version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink"
                attr.max-width={{hallDetail.dimensions.width}} attr.max-height={{hallDetail.dimensions.height}}>
                <rect x="0" y="0"
                  attr.width={{hallDetail.dimensions.width}} attr.height={{hallDetail.dimensions.height}} />
                 <image *ngFor="#item of itemsOfHallDetail" attr.class={{item?.category}}
                 attr.xlink:href="../../img/{{item?.category}}.svg" xlink:href=""
                 attr.x={{item.location.startX}} attr.y={{item.location.startY}} (click)="onSelectedItem(item)"
                 [style.cursor]="'pointer'"/>
                 <rect *ngFor="#item of itemsOfHallDetail" attr.class="{{item?.category}}Bar"
                    attr.x={{item.location.startX}} attr.y={{item.location.startY+50}}
                    attr.width="{{(item.nextAction.date | dateFilter: now) | attentionItemFilter: null}}" height="10"
                    [style.fill]="getRightColor(((item.nextAction.date | dateFilter: now) | attentionItemFilter: null))"/>

             </svg>
             <!-- legende -->
             <div *ngFor="#item of itemsOfHallDetail" class="hallDetailLegende">
                 <img  class="itemIcon" src="../../img/{{item?.category}}.svg">
                 <p>   {{item?.category}}  </p>
             </div>

             <div *ngIf="itemDetail" id="itemDetailIcon">
                 <img class="itemIcon" src="../../img/{{itemDetail?.category}}.svg"
                   style="height:48px" x="100" y="100">
             </div>
          </div>
            `,
    inputs: ['halls', 'hallDetail', 'itemsOfHallDetail', 'itemDetail'],
    outputs: ['selected'],
    pipes: [DateFilter, AttentionItemFilter]
})

export class DrawHallComponent{
    private now: Date = new Date();
    private selected: EventEmitter<Hall> = new EventEmitter();
    onSelected(hall: Hall){
      this.selected.emit(hall)
    }
    onSelectedItem(item: Item){
        this.selected.emit(item);
    }
    getRightColor(width: number): string{
        if(width <= 24){
            return 'rgb(255,0,0)';
        }else if (width >= 50){
            return 'rgb(0,255,0)';
        }else{
            return'rgb(250,250,0)';
        }
    }
}
