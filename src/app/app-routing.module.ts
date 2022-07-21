import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatatableComponent } from './datatable/datatable.component';
import { FormComponent } from './form/form.component';
import { RutaComponent } from './ruta/ruta.component';

const routes: Routes = [{path:'ruta',component:RutaComponent},{path:'form',component:FormComponent},{path:'table',component:DatatableComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
