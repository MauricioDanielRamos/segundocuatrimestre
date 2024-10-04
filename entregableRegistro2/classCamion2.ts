import { Vehiculo } from "./classVehiculos";

export class Camion extends Vehiculo {
    //propiedades exclusivas a Camion
    private capacidadCarga: number;
    //fin propiedades

    //constructor
    constructor(patente: string, marca: string, modelo: string, capacidadCarga: number) {
        super(patente, marca, modelo); //propiedades heredadas de Vehiculo
        this.capacidadCarga = capacidadCarga;
    }
    //fin constructor

    //metodos
    public getDetalles(): string {
        return `${super.getDetalles()}, Capacidad de carga: ${this.capacidadCarga}kg`;
    }

    public setCapacidadCarga(capacidadCarga:number):number{
        return this.capacidadCarga = capacidadCarga;
    }
    //fin metodos
}
