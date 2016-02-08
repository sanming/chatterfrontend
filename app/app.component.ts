import {Component} from 'angular2/core'
import {ContentComponent} from './component/content.component'
import {MapComponent} from "./component/map.component";
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AboutComponent} from "./component/about.component";
import {HallDetailComponent} from "./component/hallDetail.component";
import {ItemDetailComponent} from "./component/itemDetail.component";


@Component({
    selector: 'my-factory-app',
    template:`
    <header>
      <div id="banner"></div>
    </header>
       <my-content></my-content>
  `,
    directives: [ContentComponent]
})

@RouteConfig([
   // {path:'/', name:'App', component: AppComponent, useAsDefault: true},
    {path:'/map', name:'Map', component: MapComponent},
    {path:'/about', name:'About', component: AboutComponent},
    {path:'/hall/:id', name: 'HallDetail', component: HallDetailComponent},
    {path:'/hall/:hid/item/:id', name: 'ItemDetail', component: ItemDetailComponent}
])

export class AppComponent {
}