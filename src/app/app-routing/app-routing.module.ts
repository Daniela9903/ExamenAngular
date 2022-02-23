import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from '../components/contenido/contenido.component';
import { ListaComponent } from '../components/lista/lista.component';


const routes : Routes = [

   { path:"listado",
   component:ListaComponent},

   { path:"contenido",
   component:ContenidoComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
