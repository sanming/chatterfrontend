import {Component, OnInit} from 'angular2/core';
import {HallService} from "../service/hall.service";
import {ItemService} from "../service/item.service";
import {Hall} from "../model/hall";
import {RouteParams, Router} from 'angular2/router';
import {DrawHallComponent} from "../util/toolDrawRectangle";
import {Item} from "../model/item";
import {User} from "../model/user";

/*
 Deze component beschrijft de details van een bepaalde hall. De ID wordt uitgelezen via de URL en gaat via de geïnjecteerde service deze
 hall opvragen
*/
@Component({
    template: `
             <section id="hallDetailWithItems">
             <div class="hallDetailInfo">
               <h1 class="contentTitle">Hal overzicht</h1>
               <div id="hallDetailInfo">
                <p>Naam: {{selectedHall?.name}} Hal</p>
                <p>Items: {{selectedHall?.amountItems}}</p>
                <p>Aandacht nodig: {{selectedHall?.amountItemsNeedAttention}}</p>
                <p>opp: {{selectedHall?.area}}</p>
                <p *ngFor="#user of users">
                   username: {{user.username}}</p>
               </div>

             </div>
               <my-drawn-hall [hallDetail]="selectedHall" [itemsOfHallDetail]="itemsOfSelectedHall" (selected)="onSelectItem($event)"></my-drawn-hall>
             </section>
    `,
    directives: [DrawHallComponent],
    providers:[HallService, ItemService]

})

export class HallDetailComponent{
    private selectedHall: Hall;
    private itemsOfSelectedHall: Item[] = [];
    private users: User[] = [];
    public constructor(
        private router: Router,
        private routeParams:RouteParams,
        private hallService:HallService,
        private itemService: ItemService
    ){}

    ngOnInit() {
        let id = this.routeParams.get('id');
        this.getSpecificHall(id);

    }
    getSpecificHall(id: string | number){
        this.hallService.getHall(id).subscribe((hall:Hall) => {
            this.selectedHall = hall;
            this.getItems();
        });
        this.hallService.getUsers().subscribe((users: User[]) => {
            this.users = users;
        })
    }
    getItems() {
        if (this.selectedHall != null) {
            // itemList op null zetten voor dat er toegeveogd wordt?
            for (var i = 0; i < this.selectedHall.itemsId.length; i++) {
                var id = this.selectedHall.itemsId[i];
                this.itemService.getItem(id).subscribe((item:Item) => {
                    this.itemsOfSelectedHall.push(item);
                });
            }
        }
    }
    onSelectItem(item: Item){
        this.router.navigate(['/ItemDetail', {hid: this.selectedHall.id, id: item.productNo}]);
    }
}
