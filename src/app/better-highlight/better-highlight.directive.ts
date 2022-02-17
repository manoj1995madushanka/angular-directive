import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

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
    // commented because added hostListener
    // this.renderer.setStyle(this.elementRef, 'background-color', 'blue');
  }

  @HostListener('mouseover') mouseOver() {
    this.renderer.setStyle(this.elementRef, 'background-color', 'red');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.renderer.setStyle(this.elementRef, 'background-color', 'transparent');
  }
}
