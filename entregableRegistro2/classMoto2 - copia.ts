import { Vehiculo } from "./classVehiculos";

export class Moto extends Vehiculo {
    //propiedades exclusivas a Moto
    private cilindrada: number;
    //fin propiedades

    //constructor
    constructor(patente: string, marca: string, modelo: string, cilindrada: number) {
        super(patente, marca, modelo); //propiedades heredadas de Vehiculo
        this.cilindrada = cilindrada;
    }
    //fin constructor

    //metodos
    public getDetalles(): string {
        return `${super.getDetalles()}, Cilindrada: ${this.cilindrada}cc`;
    }
    public setCilindrada(cilindrada:number):number{
        return this.cilindrada = cilindrada;
    }
    //fin metodos
}