import { Aula } from "./aula";
import { Curso } from "./curso";
import { Docente } from "./docente";

export class Clase {
    codigo!: number;
    docente!: Docente;
    curso!: Curso;
    aula!: Aula;
}
