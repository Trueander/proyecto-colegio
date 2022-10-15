import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Aula } from 'src/app/core/aula';
import { Clase } from 'src/app/core/clase';
import { ClaseFormComponent } from '../../components/clase-form/clase-form.component';
import { EnviarReporteComponent } from '../../components/enviar-reporte/enviar-reporte.component';
import { AulaService } from '../../services/aula.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent implements OnInit {

  clases: Clase[] = [];

  aula_id!: number;
  aula!: Aula;

  constructor(private activatedRoute: ActivatedRoute, 
    public dialog: MatDialog, 
    private aulaService:  AulaService,
    private location: Location) { }

  ngOnInit(): void {
    this.activatedRoute.params
        .subscribe(params => {
          this.aula_id = params['aula_id'];

          if(this.aula_id) {
            this.aulaService.obtenerAulaPorId(this.aula_id)
                .subscribe({
                  next: response => this.aula = response,
                  error: error => console.log(error),
                  complete: () => console.log("Aula obtenida con éxito!")
                })
            this.aulaService.listarClasesPorAula(this.aula_id)
                .subscribe({
                  next: response => this.clases = response,
                  error: error => console.log(error),
                  complete: () => console.log("Clases obtenidas con éxito!")
                })
          }
        })
  }

  openDialog(): void {
    const claseFormDialog = this.dialog.open(ClaseFormComponent, {
      data:{aula_id: this.aula_id},
      width: '400px',
      restoreFocus: false
    });

    claseFormDialog.afterClosed
          ().subscribe(result => {
            let clase: Clase = result;

            if(clase){
              this.clases.push(clase);
            }
          })
  }

  openDialogReporte(): void {
    const claseFormDialog = this.dialog.open(EnviarReporteComponent, {
      data:{codigo_aula: this.aula_id},
      width: '400px',
      restoreFocus: false
    });
  }

  retroceder () {
    this.location.back();
  }

}
