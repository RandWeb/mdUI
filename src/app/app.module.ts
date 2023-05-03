import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SampleComponent } from './compnents/base/sample/sample.component';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import { HeaderComponent } from './layout/header/header.component';
import { MainMenuComponent } from './layout/admin-layout/main-menu/main-menu.component';
import { CitiesComponent } from './compnents/base/cities/cities.component';
import { CategoryInfoComponent } from './compnents/base/category/category-info/category-info.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatTabsModule} from "@angular/material/tabs";
import {MaterialModule} from "./modules/material.modules";
import { PersianDatePipe } from './pipes/persian-date.pipe';
import { LoginComponent } from './compnents/authenticate/login/login.component';
import {HttpClientModule} from "@angular/common/http";
import { HighlightDirective } from './directives/highlight.directive';
import { MyForDirective } from './directives/my-for.directive';
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SampleComponent,
    HeaderComponent,
    MainMenuComponent,
    CitiesComponent,
    CategoryInfoComponent,
    PersianDatePipe,
    LoginComponent,
    HighlightDirective,
    MyForDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
