import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AulasComponent } from './pages/aulas/aulas.component';
import { AulasRoutingModule } from './aulas-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClasesComponent } from './pages/clases/clases.component';
import { RegistroNotasComponent } from './pages/registro-notas/registro-notas.component';
import { AulaFormComponent } from './components/aula-form/aula-form.component';
import { ClaseFormComponent } from './components/clase-form/clase-form.component';
import { EnviarReporteComponent } from './components/enviar-reporte/enviar-reporte.component';



@NgModule({
  declarations: [
    AulasComponent,
    ClasesComponent,
    RegistroNotasComponent,
    AulaFormComponent,
    ClaseFormComponent,
    EnviarReporteComponent
  ],
  imports: [
    CommonModule,
    AulasRoutingModule,
    SharedModule
  ]
})
export class AulasModule { }
