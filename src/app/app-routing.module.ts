import { TlfBorradoComponent } from './componentes/tlf-borrado/tlf-borrado.component';
import { TlfAnadidoComponent } from './componentes/tlf-anadido/tlf-anadido.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaMovilComponent } from './componentes/vista-movil/vista-movil.component';
import { ListadoMovilComponent } from './componentes/listado-movil/listado-movil.component';
import { AnadirPhoneComponent } from './componentes/anadir-phone/anadir-phone.component';
import { NuevoPhoneComponent } from './componentes/nuevo-phone/nuevo-phone.component';

const routes: Routes = [

    {
     
            
        path: 'app-vista-movil',
        component: VistaMovilComponent,
    },  {
        path: 'app-listado-movil',
        component: ListadoMovilComponent,
    },  {
        path: 'app-vista-movil/anadir-phone',
        component: AnadirPhoneComponent,
    },
      {
        path: 'app-listado-movil/nuevo-phone',
        component: NuevoPhoneComponent,
    },{
        path: 'app-vista-movil/anadir-phone/tlf-anadido',
        component: TlfAnadidoComponent,
    },{
        path: 'app-vista-movil/anadir-phone/tlf-borrado',
        component: TlfBorradoComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }