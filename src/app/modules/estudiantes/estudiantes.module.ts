import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EstudianteFormComponent } from './components/estudiante-form/estudiante-form.component';


@NgModule({
  declarations: [
    EstudiantesComponent,
    EstudianteFormComponent
  ],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    SharedModule
  ]
})
export class EstudiantesModule { }
