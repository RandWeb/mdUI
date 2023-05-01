import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() sideNavToggle = new EventEmitter<boolean>();

  constructor() {
  }

  toggle(): void {
    this.sideNavToggle.emit();
  }
}
