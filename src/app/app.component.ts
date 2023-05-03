import {Component, OnInit} from '@angular/core';
import {AuthenticateService} from "./services/authenticate.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular';
  isAuthenticate:boolean = false;

  constructor(private authenticatedService:AuthenticateService) {
  }

  ngOnInit(): void {
    this.isAuthenticate = this.authenticatedService.isAuthenticate;
  }
}
