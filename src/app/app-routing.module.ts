import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SampleComponent} from "./compnents/base/sample/sample.component";
import {CitiesComponent} from "./compnents/base/cities/cities.component";
import {CategoryInfoComponent} from "./compnents/base/category/category-info/category-info.component";

const routes: Routes = [
  {path:'',component:SampleComponent},
  {path:'base',component:CitiesComponent},
  {path:'base/categories',component:CategoryInfoComponent},
  {path:'base/cities',component:CitiesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
