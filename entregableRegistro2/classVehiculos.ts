export class Vehiculo {
    //propiedades
    private patente: string;
    private marca: string;
    private modelo: string;
    //fin propiedades

    //constructor
    constructor(patente: string, marca: string, modelo: string) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
    }
    //constructor

    //metodos
    public getPatente(): string {
        return this.patente;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getDetalles(): string {
        return `Patente: ${this.patente}, Marca: ${this.marca}, Modelo: ${this.modelo}`;
    }
    //fin metodos
}