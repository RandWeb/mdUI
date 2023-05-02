import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Output() sideNavToggle = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle(): void {
    this.sideNavToggle.emit();
  }

}
