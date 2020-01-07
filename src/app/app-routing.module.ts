import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialComponent } from './material/material.component';
import { HomeComponent } from './home/home.component';
import { AddDataComponent } from './add-data/add-data.component';


const routes: Routes = [{path:"",component:MaterialComponent},
                        {path:"home",component:HomeComponent},
                        {path:"addData", component:AddDataComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
