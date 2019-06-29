import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  //public elementRef:ElementRef;

  @HostListener('click') onclick() {
    alert('clicked');
  };

  @HostListener('mouseenter') onMouseEnter() {
    this.background = "red";
  };

  @HostListener('mouseleave') onMouseDown() {
    this.background = "yellow";
  };



  @HostBinding('style.backgroundColor') background;
  @HostBinding('style.color') color;


  constructor(public elementRef: ElementRef) {
    //this.elementRef = elementRef;
  }

  ngOnInit() {
    this.background = "yellow";
    this.color = "orange";

    // using Element  Ref
    // console.log("custom Directive called", this.elementRef);
    // this.elementRef.nativeElement.style.backgroundColor = "red";
  }



}
