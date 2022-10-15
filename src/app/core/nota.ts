import { Bimestre } from "./bimestre";
import { Curso } from "./curso";
import { Estudiante } from "./estudiante";

export class Nota {
     codigo!: number;
     nota_semana_1!:number; 
     nota_semana_2!:number; 
     nota_semana_3!:number; 
     nota_semana_4!:number; 
     nota_semana_5!:number; 
     nota_semana_6!:number; 
     nota_semana_7!:number; 
     nota_semana_8!:number; 
     nota_tarea_1!:number; 
     nota_tarea_2!:number; 
     nota_tarea_3!:number; 
     nota_tarea_4!:number; 
     nota_tarea_5!:number; 
     nota_tarea_6!:number; 
     nota_tarea_7!:number;
     nota_tarea_8!:number;  
     nota_examen_final!:number; 
    
    estudiante!:Estudiante; 
    curso!:Curso; 
    bimestre!:Bimestre; 
}
