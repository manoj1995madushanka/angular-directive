import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  /**
   * this is a better way to access dom element using angular
   * */
  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef, 'background-color', 'blue');
  }
}
