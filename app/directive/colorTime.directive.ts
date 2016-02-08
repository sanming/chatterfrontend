import {Directive, ElementRef, Renderer, Input} from 'angular2/core';
/*
 Deze custom directive dient om de juiste kleur te selecteren wanneer een item dringend gecontroleerd/vervangen moet worden.
 (wordt niet meer gebruikt)
 */

@Directive({
    selector: '[myColorTime]'
})
export class ColorTimeDirective {
    @Input('myColorTime') width: string;
    private color: string;

    constructor(private el: ElementRef, private renderer: Renderer) {
        this.setColor();
    }
    private setColor() {
        alert(this.width);
        var width2 = parseInt(this.width);// parseInt(this.width);
        if(width2 < 24){
            this.color = 'rgb(255,0,0)';
            this.renderer.setElementStyle(this.el, 'fill', this.color);
        }else if (width2 > 240){
            this.color = 'rgb(0,255,0)';
            this.renderer.setElementStyle(this.el, 'fill', this.color);
        }else{
            this.color = 'rgb(250,250,0)';
            this.renderer.setElementStyle(this.el, 'fill', this.color);
        }
    }
}
