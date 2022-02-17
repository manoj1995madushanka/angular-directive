import {Directive, Input, TemplateRef, ViewContainerRef, ViewRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  /**
   * custom directive with method
   * this is work as *ngIf directive
   * */
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.viewRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewRef: ViewContainerRef) {
  }

}
