import { Component, OnInit, Input } from '@angular/core';
import { Nota } from 'src/app/core/nota';
import { NotaService } from 'src/app/modules/aulas/services/nota.service';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {

  @Input() reporteNotaParticipacionEstudiante!: Nota[];
  @Input() reporteNotaTareaEstudiante!: Nota[];
  
  multi: any[] = [];
  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Semanas';
  yAxisLabel: string = 'Notas';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
  }
  ngOnInit(): void {
  }

  ngOnChanges() {
    this.multi= [];
    if(this.reporteNotaParticipacionEstudiante){
      this.llenarSeriesParticipacionLineChart();
    }

    if(this.reporteNotaTareaEstudiante){
      this.llenarSeriesTareaLineChart();
    }

    Object.assign(this, { multi: this.multi })
  }


  llenarSeriesParticipacionLineChart(){
      this.reporteNotaParticipacionEstudiante.forEach((r: Nota) => {
        this.multi.push({
          "name": r.curso.nombre,
          "series": [
            {
              name: 'Sem 1',
              value: r.nota_semana_1,
            },
            {
              name: 'Sem 2',
              value: r.nota_semana_2,
            },
            {
              name: 'Sem 3',
              value: r.nota_semana_3,
            },
            {
              name: 'Sem 4',
              value: r.nota_semana_4,
            },
            {
              name: 'Sem 5',
              value: r.nota_semana_5,
            },
            {
              name: 'Sem 6',
              value: r.nota_semana_6,
            },
            {
              name: 'Sem 7',
              value: r.nota_semana_7,
            },
            {
              name: 'Sem 8',
              value: r.nota_semana_8,
            }
          ]
        })
        // this.multi = this.multi.sort(this.compare);
      })
  }

  llenarSeriesTareaLineChart(){
    this.reporteNotaTareaEstudiante.forEach((r: Nota) => {
      this.multi.push({
        "name": r.curso.nombre,
        "series": [
          {
            name: 'Sem 1',
            value: r.nota_tarea_1,
          },
          {
            name: 'Sem 2',
            value: r.nota_tarea_2,
          },
          {
            name: 'Sem 3',
            value: r.nota_tarea_3,
          },
          {
            name: 'Sem 4',
            value: r.nota_tarea_4,
          },
          {
            name: 'Sem 5',
            value: r.nota_tarea_5,
          },
          {
            name: 'Sem 6',
            value: r.nota_tarea_6,
          },
          {
            name: 'Sem 7',
            value: r.nota_tarea_6,
          },
          {
            name: 'Sem 8',
            value: r.nota_tarea_8,
          }
        ]
      })
      // this.multi = this.multi.sort(this.compare);
    })
}

}
