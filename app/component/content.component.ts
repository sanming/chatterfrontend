import {Component} from 'angular2/core';
import {MapComponent} from './map.component';
import {Hall} from "../model/hall";
import {ROUTER_DIRECTIVES} from 'angular2/router';
/*
 Deze component is de root van de inhoud van deze SPA.
 */
@Component ({
    selector: 'my-content',
    template: `<section id="content">
                 <section id="menu">
                 <div id="mapLink" [routerLink]="['Map']">
                  Map
                 </div>
                 <div id="aboutLink" [routerLink]="['About']">
                  About
                 </div>
                 <div id="userLink">
                  Login
                 </div>
                 </section>
                   <router-outlet></router-outlet>
               </section>
    `,
    directives:[MapComponent, ROUTER_DIRECTIVES]
})

export class ContentComponent {
    private choiceMade: boolean = false;
}
