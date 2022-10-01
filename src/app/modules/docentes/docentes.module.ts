import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocentesRoutingModule } from './docentes-routing.module';
import { DocentesComponent } from './pages/docentes/docentes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DocenteFormComponent } from './components/docente-form/docente-form.component';


@NgModule({
  declarations: [
    DocentesComponent,
    DocenteFormComponent
  ],
  imports: [
    CommonModule,
    DocentesRoutingModule,
    SharedModule
  ]
})
export class DocentesModule { }
