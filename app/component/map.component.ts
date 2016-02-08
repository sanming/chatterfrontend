import {Component, OnInit, EventEmitter} from 'angular2/core';
import {HallService} from "../service/hall.service";
import {Hall} from "../model/hall";
import {Router} from 'angular2/router';
import {DrawHallComponent} from '../util/toolDrawRectangle';

/*
 Deze component geeft de verschillende hallen weer die uitgelezen werd via de HallService.
 Een plattegrond of een lijst kan weergegeven worden.
 */
@Component ({
    selector: 'my-map',
    template: `<section id="viewToolbar">
                 <ul>
                   <li *ngFor="#choice of listViewChoices"
                    (click)="selectChoiceView(choice)"
                   >{{choice}}</li>
                 </ul>
               </section>
               <section *ngIf="!showList" id="drawnMap">
               <h1 class="contentTitle">Kaart</h1>
                  <my-drawn-hall [halls]="halls" (selected)="onSelectSpecificHall($event)"
                  ></my-drawn-hall>
               </section>
               <section *ngIf="showList" id="listMap">
                <h1 class="contentTitle">Lijst</h1>
                 <ol class="listOfHalls">
                   <li *ngFor="#hall of halls" (click)="onSelectSpecificHall(hall)">
                   {{hall.name}}</li>
                 </ol>
               </section>
    `,
    directives: [DrawHallComponent],
    providers: [HallService]
})


export class MapComponent implements OnInit{
    private showList:boolean;
    private listViewChoices:string[] = ["Plattegrond", "Lijst"];
    public halls:Hall[];

    public constructor(
        private router: Router,
        private hallService:HallService) {
        this.showList = false;
    }
    ngOnInit(){
        this.getHalls();
    }
    getHalls(){
        this.hallService.getHalls().subscribe((halls:Hall[]) => {
            this.halls = halls;
        });
    }

    selectChoiceView(choice:string) {
        if (choice == this.listViewChoices[0]) {
            this.showList = false;
        } else {
            this.showList = true;
        }
    }
    onSelectSpecificHall(hall: Hall){
        this.router.navigate(['/HallDetail', {id: hall.id}]);
    }

}
