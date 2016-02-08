import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {ItemService} from "../service/item.service";
import {Item} from "../model/item";
import {Category} from "../model/enumCategory";
import {ActionType} from "../model/enumActionType";
import {DateParser} from "../util/dateParser";
import {DrawHallComponent} from "../util/toolDrawRectangle";
/*
 Deze component beschrijft de details van een bepaald item. De ID wordt uitgelezen via de URL en gaat via de geïnjecteerde service
 dit item ophalen.
 */
@Component({
    template: `
            <section id="itemDetail">
              <h1 class="contentTitle">Item overzicht</h1>
              <p>{{selectedItem?.category}}: {{selectedItem?.productNo}}</p>
              <div *ngIf="selectedItem">
               <div id="itemDetailToolbar">
                  <my-drawn-hall [itemDetail]="selectedItem"></my-drawn-hall>
                  <button type="submit" class="btnActionPerformed" (click)="performNextAction()" width="60" height="25">Actie uitgevoerd</button>
               </div>
               <form>
                <div class="form-group">
                  <label for="category">Categorie</label>
                  <select class="categoryForm-control" required [(ngModel)]="selectedItem.category">
                    <option *ngFor="#c of categories" selected [value]="c">{{c}}</option>
                  </select>
                </div>
                  <div class="form-group">
                    <label for="productNo">ProductNo</label>
                    <input type="text" class="form-control" required [(ngModel)]="selectedItem.productNo">
                  </div>
                  <div class="form-group">
                      <label for="hallId">HallId</label>
                      <input type="text" class="form-control" required [(ngModel)]="selectedItem.hallId">
                  </div>
                  <div class="form-group">
                      <label for="name">Naam</label>
                      <input type="text" class="form-control" required [(ngModel)]="selectedItem.name">
                  </div>
                  <div class="form-group">
                      <label for="description">Beschrijving</label>
                      <input type="text" class="form-control"  [(ngModel)]="selectedItem.description">
                  </div>

                  <section class="itemAction" id="lastPerformedActionForm">
                    <div class="form-group">
                      <label for="lastPerformedActionDate">Laatst uitgevoerd op</label>
                      <input type="text" class="form-control" readonly value="selectedItem.lastPerformedAction?.date | dateParser: null" [(ngModel)]="selectedItem.lastPerformedAction.date">
                    </div>
                    <div class="form-group">
                      <label for="actionType">Type</label>
                      <input type="text" class="form-control" readonly [(ngModel)]="selectedItem.lastPerformedAction.type">
                    </div>
                    <div class="form-group">
                      <label for="descriptionLastPerformedAction">Beschrijving</label>
                      <input type="text" class="form-control" readonly [(ngModel)]="selectedItem.lastPerformedAction.description">
                    </div>
                  </section>
                  <section class="itemAction"  id="nextActionForm">
                    <div class="form-group">
                      <label for="nextAction">Volgende uitvoering op</label>
                      <input type="text" class="form-control" value="selectedItem.nextAction?.date | dateParser: null" [(ngModel)]="selectedItem.nextAction.date">
                    </div>
                    <div class="form-group">
                      <label for="actionType">Type</label>
                      <select class="form-control"  selected="selectedItem.nextAction?.type">
                        <option *ngFor="#at of actionTypes" [value]="at" >{{at}}</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="descriptionNextAction">Beschrijving</label>
                      <input type="text" class="form-control" [(ngModel)]="selectedItem.nextAction.description">
                    </div>
                  </section>
                  <button type="submit" class="btnSubmit" (click)="saveItem()">Submit</button>
                  <button type="reset" class="btnRevert" (click)="revertItem()">Revert</button>
               </form>
              </div>
             <div *ngIf="!selectedItem">
               ITEM NOT FOUND
             </div>
            </section>
    `,
    directives:[DrawHallComponent],
    providers:[ItemService],
    pipes: [DateParser]
})

export class ItemDetailComponent implements OnInit{
    private extra: string;
    private selectedItem: Item;
    private tempItem: Item; //holds original item values
    private categories : Category[];
    private actionTypes: ActionType[];

    constructor(private routeParams:RouteParams, private itemService: ItemService){
        this.categories = [Category.MACHINE, Category.BAND, Category.LAMP];
        this.actionTypes= [ActionType.VERVANGING, ActionType.NAZICHT];
    }

    ngOnInit() {
        let id = this.routeParams.get('id');
        this.getSpecificItem(id);

    }
    getSpecificItem(id: string | number){
        this.itemService.getItem(id).subscribe((item:Item) => {
            this.selectedItem = item;
            this.tempItem = item;
        });
    }
    saveItem(){
        if(this.selectedItem != null){
            var jsonResult = JSON.stringify(this.selectedItem);
            alert(jsonResult);
            //todo POST
        }else{
            alert('Error! Geen item geselecteerd.');
        }
    }
    revertItem(){
        if(this.selectedItem !=null && this.tempItem != null){
            this.selectedItem = this.tempItem;
            alert("reverted");
        }
    }
    performNextAction(){
        if(this.selectedItem != null){
            if (this.selectedItem.nextAction.date != null){
                this.selectedItem.lastPerformedAction.date = new Date();
                this.selectedItem.lastPerformedAction.type = this.selectedItem.nextAction.type;
                this.selectedItem.lastPerformedAction.description = this.selectedItem.nextAction.description;
                this.selectedItem.nextAction.date = null;
                this.selectedItem.nextAction.type = null;
                this.selectedItem.nextAction.description = null;
            }else{
                alert('Error! Volgende uitvoering is leeg.')
            }

        }
    }
}
/*
    </div>*/