import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTestDir]'
})
export class TestDirDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  constructor(private elref: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
//    this.renderer.setStyle(this.elref.nativeElement, "background-color", "blue", );

  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elref.nativeElement, "background-color", "blue");
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elref.nativeElement, "background-color", 'transparent');
    this.backgroundColor = 'transparent';
  }
}
