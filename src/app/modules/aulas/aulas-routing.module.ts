import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AulasComponent } from './pages/aulas/aulas.component';
import { ClasesComponent } from './pages/clases/clases.component';
import { RegistroNotasComponent } from './pages/registro-notas/registro-notas.component';

const routes: Routes = [
  {
    path: '',
    component: AulasComponent
  },
  {
    path:':aula_id/clases',
    component: ClasesComponent
  },
  {
    path:':aula_id/clases/:clase_id',
    component: RegistroNotasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AulasRoutingModule { }
