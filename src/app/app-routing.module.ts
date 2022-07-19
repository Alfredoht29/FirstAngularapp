import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { RutaComponent } from './ruta/ruta.component';

const routes: Routes = [{path:'ruta',component:RutaComponent},{path:'form',component:FormComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
