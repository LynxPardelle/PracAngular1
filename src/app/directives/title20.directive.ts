import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
  selector: '[appTitle20]',
})
export class Title20Directive implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.element.nativeElement.style.fontSize = '20px';
  }
}
