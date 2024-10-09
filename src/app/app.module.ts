import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { RutaComponent } from './ruta/ruta.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { DatatableComponent } from './datatable/datatable.component';
import { ObservableComponent } from './observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoComponent,
    RutaComponent,
    FormComponent,
    DatatableComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
