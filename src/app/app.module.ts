import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { VistaMovilComponent } from './componentes/vista-movil/vista-movil.component';
import { ListadoMovilComponent } from './componentes/listado-movil/listado-movil.component';
import { RouterModule } from '@angular/router';
import { PricePipe } from './pipes/price.pipe';
import { CerrarBotonComponent } from './componentes/cerrar-boton/cerrar-boton.component';
import { GbPipe } from './pipes/gb.pipe';
import { InchPipe } from './pipes/inch.pipe';
import { AnadirPhoneComponent } from './componentes/anadir-phone/anadir-phone.component';
import { NuevoPhoneComponent } from './componentes/nuevo-phone/nuevo-phone.component';
import { FiltradoPipe } from './pipes/filtrado.pipe';
import { FormsModule } from '@angular/forms';
import { TlfAnadidoComponent } from './componentes/tlf-anadido/tlf-anadido.component';
import { TlfBorradoComponent } from './componentes/tlf-borrado/tlf-borrado.component';

@NgModule({
  declarations: [
    AppComponent,
    VistaMovilComponent,
    ListadoMovilComponent,
    PricePipe,
    CerrarBotonComponent,
    GbPipe,
    InchPipe,
    AnadirPhoneComponent,
    NuevoPhoneComponent,
    FiltradoPipe,
    TlfAnadidoComponent,
    TlfBorradoComponent,
  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpClientModule,RouterModule, FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
