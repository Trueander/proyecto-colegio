import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BimestresComponent } from './pages/bimestres/bimestres.component';

const routes: Routes = [
  {
    path:'',
    component: BimestresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BimestresRoutingModule { }
