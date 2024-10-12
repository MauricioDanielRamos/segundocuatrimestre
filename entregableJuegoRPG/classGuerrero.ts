import { Personaje } from "./classPersonaje";

export class Guerrero extends Personaje {
    private masazo:number;

    constructor(nombre:string,nivel:number,puntosVida:number, masazo:number) {
        super(nombre,nivel,puntosVida);
        this.masazo = masazo;
    }

    atacar(): string {
        console.log(`${this.nombre} esta atacando`);
        return `${this.nombre} lanzó un golpe de mazo de ${this.masazo} puntos`;
    }

    defender(): string {
        console.log(`${this.nombre} esta defendiendo`);
        return `${this.nombre} recibio un golpe de ${this.golpeRecibido} puntos`;
    }

    public getMasazo() : number {
        return this.masazo;
    }
}