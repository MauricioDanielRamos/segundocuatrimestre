/* Crear un sistema de personajes de un 
videojuego RPG utilizando herencia y 
polimorfismo.

 Los personajes tendrán 
características y habilidades únicas,

 y algunos podrán evolucionar a versiones 
mejoradas con nuevas habilidades

Ejemplo de clase base personaje:

El personaje debe tener atributos ej:
nombre (string): El nombre del personaje.
nivel (number): El nivel del personaje (empieza en 1).
puntosDeVida (number): Los puntos de vida del personaje.

Métodos ej:
atacar(): Imprime un mensaje indicando que el personaje 
está atacando.
defender(): Imprime un mensaje indicando que el personaje 
está defendiendo.

Aclaracion, pueden crear las propiedades que quieran 
pero no se vayan por la ramas.

Hagan lo justo y 
necesario. 

Recomendamos crear  3 tipos de héroes (mago, 
luchador, arquero) y luego algunos especiales */

export abstract class Personaje {

    protected nombre:string;
    protected nivel:number=1;
    protected puntosVida:number;
    protected golpeRecibido = Math.floor(Math.random()*10)+1;

    constructor(nombre:string,nivel:number,puntosVida:number) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosVida = puntosVida;
    }

    abstract atacar(): void;

    abstract defender(): void;

    public subirNivel(): string {
        this.nivel++;
        return `${this.nombre} ha subido al nivel ${this.nivel}.`
    }

    public getPuntosVidaAlInicio():number{
        return this.puntosVida;
    }

    public getNombre():string{
        return this.nombre;
    }

    public getPuntosVida():number{
        this.puntosVida-=this.golpeRecibido;
        return this.puntosVida;
    }
}