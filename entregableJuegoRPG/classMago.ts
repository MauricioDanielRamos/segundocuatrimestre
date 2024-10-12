import { Personaje } from "./classPersonaje";

export class Mago extends Personaje {
    private golpeMagico:number;

    constructor(nombre:string,nivel:number,puntosVida:number, golpeMagico:number) {
        super(nombre,nivel,puntosVida);
        this.golpeMagico = golpeMagico;
    }

    atacar(): string {
        console.log(`${this.nombre} esta atacando`);
        return `${this.nombre} lanzó un golpe magico de ${this.golpeMagico} puntos`;
    }

    defender(): string {
        console.log(`${this.nombre} esta defendiendo`);
        return `${this.nombre} recibio un golpe de ${this.golpeRecibido} puntos`;
    }
    
    public getGolpeMagico() : number {
        return this.golpeMagico;
    }
}