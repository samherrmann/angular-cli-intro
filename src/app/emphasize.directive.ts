import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[fwEmphasize]'
})
export class EmphasizeDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.fontWeight = 'bold';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.fontWeight = 'normal';
  }

}
