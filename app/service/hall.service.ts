import {Observable} from 'angular2/angular2';
import {Http, Response} from 'angular2/http';
import {Hall} from '../model/hall';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map'
import {User} from "../model/user";

/*
* Deze service wordt gebruikt om .json files om te lezen van hallen.
* */

@Injectable()
export class HallService {
    private http:Http = null;
    public static PATH: string = "../backend/halls/";
    public static PATH2: string = "http://localhost:9966/chatter/api/user";

    constructor(http:Http) {
        this.http = http;
    }

    public getUsers(): Observable<User[]>{
        return this.http.get(HallService.PATH2).map((res:Response) => res.json());
    }

    public getHalls(): Observable<Hall[]> {
        return this.http.get(HallService.PATH + 'halls.json')
            .map((res:Response) => res.json());
    }


    public getHall(id:string | number): Observable<Hall> {
        return this.http.get(HallService.PATH +'hall' + id + '.json')
            .map((res:Response) => res.json());
    }
}
