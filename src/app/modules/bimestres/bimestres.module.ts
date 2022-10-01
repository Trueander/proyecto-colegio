import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BimestresRoutingModule } from './bimestres-routing.module';
import { BimestresComponent } from './pages/bimestres/bimestres.component';
import { BimestreFormComponent } from './components/bimestre-form/bimestre-form.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BimestresComponent,
    BimestreFormComponent
  ],
  imports: [
    CommonModule,
    BimestresRoutingModule,
    SharedModule
  ]
})
export class BimestresModule { }
