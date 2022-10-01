import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradosRoutingModule } from './grados-routing.module';
import { GradosComponent } from './pages/grados/grados.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GradoFormComponent } from './components/grado-form/grado-form.component';


@NgModule({
  declarations: [
    GradosComponent,
    GradoFormComponent
  ],
  imports: [
    CommonModule,
    GradosRoutingModule,
    SharedModule
  ]
})
export class GradosModule { }
