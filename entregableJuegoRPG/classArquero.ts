import { Personaje } from "./classPersonaje";

export class Arquero extends Personaje {
    private flechazo:number;

    constructor(nombre:string,nivel:number,puntosVida:number, flechazo:number) {
        super(nombre,nivel,puntosVida);
        this.flechazo = flechazo;
    }

    atacar(): string {
        console.log(`${this.nombre} esta atacando`);
        return `${this.nombre} lanzó un tiro de arco de ${this.flechazo} puntos`;
    }

    defender(): string {
        console.log(`${this.nombre} esta defendiendo`);
        return `${this.nombre} recibio un golpe de ${this.golpeRecibido} puntos`;
    }

    public getFlechazo() : number {
        return this.flechazo;
    }
}