import {Directive, ElementRef, Output, EventEmitter, HostListener, Renderer, OnDestroy} from '@angular/core';

@Directive({
  selector: '[preventClickOutside]'
})
export class PreventClickedDirective implements OnDestroy{
  globalListenFunc: Function;

  constructor(private _elementRef: ElementRef, renderer: Renderer) {
    this.globalListenFunc = renderer.listenGlobal('document', 'click', (event) => {
      console.log('event', event);
    })
  }

  @Output()
  public clickOutside = new EventEmitter();

  // @HostListener('window:click', ['$event.target'])
  // public onClick(targetElement) {
  //   if (targetElement.tagName.toLocaleLowerCase() == 'a' ||
  //     targetElement.tagName.toLocaleLowerCase() == 'button') {
  //     console.log('link or button clicked', this._elementRef, targetElement);
  //   }
  // }

  ngOnDestroy() {
    // Removs "listenGlobal" listener
    this.globalListenFunc();
  }
}
