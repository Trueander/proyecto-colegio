import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Aula } from 'src/app/core/aula';
import { Grado } from 'src/app/core/grado';
import { GradoService } from 'src/app/modules/grados/services/grado.service';
import { AulaFormComponent } from '../../components/aula-form/aula-form.component';
import { AulaService } from '../../services/aula.service';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.scss']
})
export class AulasComponent implements OnInit {

  aulas: Aula[] = []

  grados: Grado[] = []


  constructor(public dialog: MatDialog, private aulaService: AulaService, private gradoService: GradoService) { }

  ngOnInit(): void {
    this.gradoService.listarGrados()
        .subscribe({
          next: response => {
            this.grados = response;
          },
          error: error => console.log(error),
          complete: () => console.log('Grados recuperados con éxito!')
        })
    this.aulaService.listarAulas()
        .subscribe({
          next: response => {
            this.aulas = response
            this.agruparPorGrado() 
            console.log(this.grados) 
          },
          error: error => console.log(error),
          complete: () => console.log('Aulas recuperadas con éxito!')
        })
    
  }

  agruparPorGrado() {
    this.aulas.forEach(aula => {
      this.grados.forEach((grado, index) => {
        if(grado.codigo === aula.grado.codigo){
          if(!this.grados[index].aulas) {
            this.grados[index].aulas = [];
          }
          this.grados[index].aulas.push(aula);
        }
      })
    })
  }

  openDialog(): void {
    const aulaFormDialog = this.dialog.open(AulaFormComponent, {
      width: '400px',
      restoreFocus: false
    });

    aulaFormDialog.afterClosed()
    .subscribe(result => {
      let aula: Aula = result

      if(aula){
        for (const grado of this.grados) {
          if(grado.codigo == aula.grado.codigo) {
            if(!grado.aulas) {
              grado.aulas = [];
            }
            grado.aulas.push(aula);
            return
          }
        }
      }
    })
  }

}
