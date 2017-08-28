import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }

  
  @HostBinding('class.open') isOpen = false;
  
  @HostListener('click') toggleOpen(){
  		this.isOpen = !this.isOpen;
  		// setTimeout(function() {
    // 		this.isOpen = !this.isOpen;
  		// }, 4000);
  }

}
