import { Aula } from "./aula";

export class Grado {
    codigo!: number;
    nombre!: string;
    aulas: Aula[] = []
}
