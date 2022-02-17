import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  /**
   * this is a better way to access dom element using angular
   * */
  ngOnInit(): void {
    // commented because added hostListener
    // this.renderer.setStyle(this.elementRef, 'background-color', 'blue');
    this.backgroundColor = 'transparent';
  }

  @HostListener('mouseover') mouseOver() {
    // this.renderer.setStyle(this.elementRef, 'background-color', 'red');
    // this.backgroundColor = 'red';
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    // this.renderer.setStyle(this.elementRef, 'background-color', 'transparent');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }
}
