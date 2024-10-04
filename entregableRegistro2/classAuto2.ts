import { Vehiculo } from "./classVehiculos";

export class Auto extends Vehiculo {
    //propiedades exclusivas a Auto
    private cantidadPuertas: number;
    //fin propiedades

    //constructor
    constructor(patente: string, marca: string, modelo: string, cantidadPuertas: number) {
        super(patente, marca, modelo); //propiedades heredadas de Vehiculo
        this.cantidadPuertas = cantidadPuertas;
    }
    //fin constructor

    //metodos
    public getDetalles(): string {
        return `${super.getDetalles()}, Puertas: ${this.cantidadPuertas}`;
    }

    public setCantidadpuertas(cantidadPuertas:number):number{
        return this.cantidadPuertas = cantidadPuertas;
    }
    //fin metodos
}