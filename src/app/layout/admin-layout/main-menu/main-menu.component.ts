import {Component, OnInit} from '@angular/core';
import {MenuItem} from "../../../models/MenuItem";

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  menuItems: MenuItem[] = [
    new MenuItem(1, 'داشبورد', '/'),
    new MenuItem(2, 'اطلاعات پایه', '/base',[
      new MenuItem(3,'گروه بندی محصولات','/base/categories'),
      new MenuItem(4,'شهرها','/base/cities'),
    ])
  ];
  menuTrackBy(index:number,menuItem:MenuItem):number{
    return menuItem.id;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
