import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {HallService} from "./service/hall.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {ContentComponent} from "./component/content.component";
import {ROUTER_PROVIDERS} from 'angular2/router';
import {ItemService} from "./service/item.service";


bootstrap(AppComponent, [HallService, ItemService, HTTP_PROVIDERS, ROUTER_PROVIDERS]);