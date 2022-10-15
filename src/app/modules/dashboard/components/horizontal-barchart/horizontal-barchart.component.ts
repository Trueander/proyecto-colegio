import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-horizontal-barchart',
  templateUrl: './horizontal-barchart.component.html',
  styleUrls: ['./horizontal-barchart.component.scss']
})
export class HorizontalBarchartComponent implements OnInit {

  @Input() reporteCursosDesaprobados: any;

  @Input() cursosMasAprobadosActivo: boolean = false;;

  single: any[] = [];
  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Cursos';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Cantidad';

  constructor() { }

  ngOnInit(): void {
    if(this.reporteCursosDesaprobados){
      this.cargarDatosDelReporte();
    }

    Object.assign(this, { single: this.single })
  }

  ngOnChanges() {
    this.single= [];
    if(this.reporteCursosDesaprobados){
      this.cargarDatosDelReporte();
    }

    Object.assign(this, { single: this.single })
  }

  cargarDatosDelReporte() {
    this.reporteCursosDesaprobados.forEach((r: any) => {
      

      if(!this.cursosMasAprobadosActivo){
        if(r.cantidadDesaprobados == 0) return
        this.single.push({
          "name": r.nombre_curso,
          "value": r.cantidadDesaprobados
        })
        return
      }
      if(r.cantidadAprobados == 0) return
      this.single.push({
        "name": r.nombre_curso,
        "value": r.cantidadAprobados
      })


    })
    this.single = this.single.sort(this.compare);
    this.single = this.single.reverse();
  }

  compare( a: any, b: any ) {
    if ( a.value < b.value ){
      return -1;
    }
    if ( a.value > b.value ){
      return 1;
    }
    return 0;
  }

}
