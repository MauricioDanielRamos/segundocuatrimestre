// Clase de soporte para registro de motos
import { Moto } from "./classMoto2";

export class RegistroMoto {
    //propiedades
    private motos: Moto[] = [];
    //fin propiedades

    //metodos
    public agregarMoto(moto: Moto): void {
        this.motos.push(moto);
    }

    public eliminarMoto(patente: string): void {
        this.motos = this.motos.filter(moto => moto.getPatente() !== patente);
    }

    public buscarMoto(patente: string): Moto | undefined {
        return this.motos.find(moto => moto.getPatente() === patente);
    }

    public modificarMoto(patente: string, nuevaMarca: string, nuevoModelo: string, nuevaCilindrada: number): void {
        let moto = this.buscarMoto(patente);
        if (moto) {
            moto.setMarca(nuevaMarca);
            moto.setModelo(nuevoModelo);
            moto.setCilindrada(nuevaCilindrada);
        }
    }
    //fin metodos
}