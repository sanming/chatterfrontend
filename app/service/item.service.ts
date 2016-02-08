import {Observable} from 'angular2/angular2';
import {Http, Response} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map'
import {Item} from "../model/item";
/*
* Deze service wordt gebruikt om .json files om te lezen van items.
* Hier kan eventueel ook de POST functie uitgewerkt worden.
*/
@Injectable()
export class ItemService {
    private http:Http = null;
    public static PATH: string = "../backend/items/";

    constructor(http:Http) {
        this.http = http;
    }

    public getItems(): Observable<Item[]> {
        return this.http.get(ItemService.PATH + 'items.json')
            .map((res:Response) => res.json());
    }


    public getItem(id:string | number): Observable<Item> {
        return this.http.get(ItemService.PATH +'item' + id + '.json')
            .map((res:Response) => res.json());
    }
}
