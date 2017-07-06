import { Directive, HostListener, HostBinding  } from '@angular/core';

// dropdown directive better than linking bootstrap.js
// to avoid DOM manipluation clashes between angular and bootstrap
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor() { }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
