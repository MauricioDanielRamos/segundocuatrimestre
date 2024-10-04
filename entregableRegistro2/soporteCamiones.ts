// Clase de soporte para registro de camiones
import { Camion } from "./classCamion2";

export class RegistroCamion {
    //propiedades
    private camiones: Camion[] = [];
    //fin propiedades

    //metodos
    public agregarCamion(camion: Camion): void {
        this.camiones.push(camion);
    }

    public eliminarCamion(patente: string): void {
        this.camiones = this.camiones.filter(camion => camion.getPatente() !== patente);
    }

    public buscarCamion(patente: string): Camion | undefined {
        return this.camiones.find(camion => camion.getPatente() === patente);
    }

    public modificarCamion(patente: string, nuevaMarca: string, nuevoModelo: string, nuevaCapacidad: number): void {
        let camion = this.buscarCamion(patente);
        if (camion) {
            camion.setMarca(nuevaMarca);
            camion.setModelo(nuevoModelo);
            camion.setCapacidadCarga(nuevaCapacidad);
        }
    }
    //fin metodos
}