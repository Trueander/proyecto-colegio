import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {

  @Input() reporteNotas: any;

  codigo_aula!: number;
  @Input() codigoCurso!: number;
  
  single: any[] = [];
  multi: any[] = [];


  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Country';
  showYAxisLabel: boolean = false;
  yAxisLabel: string = 'Population';
  legendTitle: string = 'Years';

  colorScheme = 
    [
      {name:'Aprobado', value: 'rgb(122, 163, 229)'},
      {name:'Desaprobado', value: 'rgb(168, 56, 93)'}
    ]
  ;
 

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(this.reporteNotas){
      this.cargarDatosDelReporte();
    }

    Object.assign(this, { multi: this.multi })
  }

  ngOnChanges() {
    this.multi= [];
    if(this.reporteNotas){
      this.cargarDatosDelReporte();
    }

    Object.assign(this, { multi: this.multi })
  }

  cargarDatosDelReporte() {
    this.reporteNotas.forEach((r: any) => {
      let array = r.nombre_aula.split(" ");
      let nombreAula = `${array[1]} ${array[2]}`
      this.codigo_aula = array[0]
      this.multi.push({
        "name": nombreAula,
        "series": [
          {
            "name": "Aprobado",
            "value": r.aprobados,
            "extra": {
              "codigo_aula": this.codigo_aula
            }
          },
          {
            "name": "Desaprobado",
            "value": r.desaprobados,
            "extra": {
              "codigo_aula": this.codigo_aula
            }
          }
        ]
      })
      this.multi = this.multi.sort(this.compare);
    })
  }

  onSelect() {
    this.router.navigate([`aulas/${this.codigo_aula}/clases/${this.codigoCurso}`])
  }

  compare( a: any, b: any ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }

}
