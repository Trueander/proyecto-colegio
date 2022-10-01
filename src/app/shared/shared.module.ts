import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';

const MaterialComponents = [
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatDividerModule,
  MatListModule,
  MatSelectModule,
  MatTableModule,
  MatGridListModule,
  MatChipsModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatRadioModule
]

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    MaterialComponents,
    NgxChartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialComponents,
    ToolbarComponent,
    NgxChartsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
