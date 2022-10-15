import { Aula } from "./aula";

export class Estudiante {
    codigo!: number;
    nombres!: string;
    apellidos!: string;
    dni!: string;
    celular_apoderado!: string;
    aula!: Aula;
    activo!: boolean;
}
