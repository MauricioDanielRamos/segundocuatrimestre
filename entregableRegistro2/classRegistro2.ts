import { Auto } from "./classAuto2";
import { Moto } from "./classMoto2";
import { Camion } from "./classCamion2";
import { RegistroMoto } from "./soporteMotos";
import { RegistroCamion } from "./soporteCamiones";

// Clase RegistroAutomotor que maneja autos, motos y camiones
export class RegistroAutomotor {
    //propiedades
    private autos: Auto[] = [];
    private registroMotos: RegistroMoto = new RegistroMoto();
    private registroCamiones: RegistroCamion = new RegistroCamion();
    //fin propiedades

    //metodos del registro
    public agregarAuto(auto: Auto): void {
        this.autos.push(auto);
    }

    public eliminarAuto(patente: string): void {
        this.autos = this.autos.filter(auto => auto.getPatente() !== patente);
    }

    public buscarAuto(patente: string): Auto | undefined {
        return this.autos.find(auto => auto.getPatente() === patente);
    }

    public modificarAuto(patente: string, nuevaMarca: string, nuevoModelo: string, nuevasPuertas: number): void {
        let auto = this.buscarAuto(patente);
        if (auto) {
            auto.setMarca(nuevaMarca);
            auto.setModelo(nuevoModelo);
            auto.setCantidadpuertas(nuevasPuertas);
        }
    }

    // Métodos para motos
    public agregarMoto(moto: Moto): void {
        this.registroMotos.agregarMoto(moto);
    }

    public eliminarMoto(patente: string): void {
        this.registroMotos.eliminarMoto(patente);
    }

    public modificarMoto(patente: string, nuevaMarca: string, nuevoModelo: string, nuevaCilindrada: number): void {
        this.registroMotos.modificarMoto(patente, nuevaMarca, nuevoModelo, nuevaCilindrada);
    }

    public buscarMoto(patente: string): Moto | undefined {
        return this.registroMotos.buscarMoto(patente);
    }

    // Métodos para camiones
    public agregarCamion(camion: Camion): void {
        this.registroCamiones.agregarCamion(camion);
    }

    public eliminarCamion(patente: string): void {
        this.registroCamiones.eliminarCamion(patente);
    }

    public modificarCamion(patente: string, nuevaMarca: string, nuevoModelo: string, nuevaCapacidad: number): void {
        this.registroCamiones.modificarCamion(patente, nuevaMarca, nuevoModelo, nuevaCapacidad);
    }

    public buscarCamion(patente: string): Camion | undefined {
        return this.registroCamiones.buscarCamion(patente);
    }
}