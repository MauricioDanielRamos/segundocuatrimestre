import { Auto } from "./classAuto";
import { Camion } from "./classCamion";
import { Moto } from "./classMoto";


export class RegistroAutomotor {
    //propiedades
    private autos : Auto [] = [];
    private camiones : Camion [] = [];
    private motos : Moto [] = [];
    //fin propiedades

    //constructor
    constructor(autos: Auto[] = [], camiones: Camion[] = [], motos: Moto[] = []) {
        this.autos = autos;
        this.camiones = camiones;
        this.motos = motos;
    }
    //fin constructor

    //metodos
    public asignarAuto(marcaAuto: string, modeloAuto:number, patenteAuto:number, motorAuto:string, habilitadoCircular:boolean): void { 
        //validaciones
        if (marcaAuto === "") {
            console.log("La marca del auto no puede estar vacía.");
            return;
        }
        if (modeloAuto <= 0 ) {
            console.log("El modelo del auto debe ser un número positivo.");
            return;
        }
        if (patenteAuto.toString().length !== 4 || patenteAuto < 0) {
            console.log("La patente del auto debe tener 4 dígitos y no puede ser negativa.");
            return;
        }
        if (motorAuto === "") {
            console.log("El motor del auto no puede estar vacío.");
            return;
        }
        //fin validaciones
        let autito:Auto = new Auto(marcaAuto, modeloAuto, patenteAuto, motorAuto, habilitadoCircular)
        this.autos.push(autito);
    }

    public asignarMoto(marcaMoto:string,modeloMoto:number,patenteMoto:number,motorMoto:string,habilitadoCircular:boolean): void {
        //validaciones
        if (marcaMoto === "") {
            console.log("La marca de la moto no puede estar vacía.");
            return;
        }
        if (modeloMoto <= 0 ) {
            console.log("El modelo de la moto debe ser un número positivo.");
            return;
        }
        if (patenteMoto.toString().length !== 4 || patenteMoto < 0) {
            console.log("La patente de la moto debe tener 4 dígitos y no puede ser negativa.");
            return;
        }
        if (motorMoto === "") {
            console.log("El motor de la moto no puede estar vacío.");
            return;
        }
        //fin validaciones
        let motito:Moto = new Moto(marcaMoto, modeloMoto,patenteMoto,motorMoto,habilitadoCircular);
        this.motos.push(motito);
    }

    public asignarCamion(marcaCamion:string,modeloCamion:number,patenteCamion:number,motorCamion:string,habilitadoCircular:boolean): void {
        //validaciones
        if (marcaCamion=== "") {
            console.log("La marca del camión no puede estar vacía.");
            return;
        }
        if (modeloCamion <= 0 ) {
            console.log("El modelo del camión debe ser un número positivo.");
            return;
        }
        if (patenteCamion.toString().length !== 4 || patenteCamion < 0) {
            console.log("La patente del camión debe tener 4 dígitos y no puede ser negativa.");
            return;
        }
        if (motorCamion === "") {
            console.log("El motor del camión no puede estar vacío.");
            return;
        }
        //fin validaciones
        let camioncito:Camion = new Camion(marcaCamion, modeloCamion, patenteCamion,motorCamion,habilitadoCircular)
        this.camiones.push(camioncito);
    }

    public buscarAutoPorPatente(patenteAuto: number): Auto | undefined {
        //validaciones
        if (
            isNaN(patenteAuto) ||                    // Verifica si es un número
            patenteAuto === undefined ||             // Verifica que no sea undefined
            patenteAuto.toString().length !== 4 ||   // Verifica que tenga exactamente 4 dígitos
            patenteAuto < 0                          // Verifica que no sea negativo
        ) { console.log("Patente inválida. Debe ser un número positivo de 4 dígitos.");
        }
        //fin validaciones
        return this.autos.find(auto => auto.getpatenteAuto() === patenteAuto);
    }
    
    public buscarMotoPorPatente(patenteMoto: number): Moto | undefined {
        //validaciones
        if (
            isNaN(patenteMoto) ||                    // Verifica si es un número
            patenteMoto === undefined ||             // Verifica que no sea undefined
            patenteMoto.toString().length !== 4 ||   // Verifica que tenga exactamente 4 dígitos
            patenteMoto < 0                          // Verifica que no sea negativo
        ) { console.log("Patente inválida. Debe ser un número positivo de 4 dígitos.");
        }
        //fin validaciones
        return this.motos.find(moto => moto.getpatenteMoto() === patenteMoto);
    }
    
    public buscarCamionPorPatente(patenteCamion: number): Camion | undefined {
        //validaciones
        if (
            isNaN(patenteCamion) ||                    // Verifica si es un número
            patenteCamion === undefined ||             // Verifica que no sea undefined
            patenteCamion.toString().length !== 4 ||   // Verifica que tenga exactamente 4 dígitos
            patenteCamion < 0                          // Verifica que no sea negativo
        ) { console.log("Patente inválida. Debe ser un número positivo de 4 dígitos.");
        }
        //fin validaciones
        return this.camiones.find(camion => camion.getpatenteCamion() === patenteCamion);
    }
    

    public quitarAuto(patenteAuto: number): void {
        //validaciones
        if (
            isNaN(patenteAuto) ||                    // Verifica si es un número
            patenteAuto === undefined ||             // Verifica que no sea undefined
            patenteAuto.toString().length !== 4 ||   // Verifica que tenga exactamente 4 dígitos
            patenteAuto < 0                          // Verifica que no sea negativo
        ) { console.log("Patente inválida. Debe ser un número positivo de 4 dígitos.");
        }
        //fin validaciones
        this.autos = this.autos.filter((auto) => auto.getpatenteAuto() !== patenteAuto);
    }

    public quitarMoto(patenteMoto: number): void {
        //validaciones
        if (
            isNaN(patenteMoto) ||                    // Verifica si es un número
            patenteMoto === undefined ||             // Verifica que no sea undefined
            patenteMoto.toString().length !== 4 ||   // Verifica que tenga exactamente 4 dígitos
            patenteMoto < 0                          // Verifica que no sea negativo
        ) { console.log("Patente inválida. Debe ser un número positivo de 4 dígitos.");
        }
        //fin validaciones
        this.motos = this.motos.filter((moto) => moto.getpatenteMoto() !== patenteMoto);
    }

    public quitarCamion(patenteCamion: number): void {
        //validaciones
        if (
            isNaN(patenteCamion) ||                    // Verifica si es un número
            patenteCamion === undefined ||             // Verifica que no sea undefined
            patenteCamion.toString().length !== 4 ||   // Verifica que tenga exactamente 4 dígitos
            patenteCamion < 0                          // Verifica que no sea negativo
        ) { console.log("Patente inválida. Debe ser un número positivo de 4 dígitos.");
        }
        //fin validaciones
        this.camiones = this.camiones.filter((camion) => camion.getpatenteCamion() !== patenteCamion);
    }

    public modificarAuto(patenteAuto: number, nuevaMarca: string, nuevoModelo: number, nuevoMotor:string, nuevoHabilitado:boolean): void {
        //validaciones
        if (patenteAuto < 0 || patenteAuto.toString().length !== 4) {
            console.log("La patente debe ser un número positivo de 4 dígitos.");
            return;
        }
        if (nuevaMarca === undefined || nuevaMarca ==="") {
            console.log("La marca no puede ser undefined o estar vacía.");
            return;
        }
        if (nuevoModelo < 0) {
            console.log("El modelo no puede ser un número negativo.");
            return;
        }
        if (nuevoMotor ===undefined || nuevoMotor === "") {
            console.log("El motor no puede ser undefined o estar vacío.");
            return;
        }
        //fin validaciones
        const auto = this.buscarAutoPorPatente(patenteAuto);
        if (auto) {
            auto.setmarcaAuto(nuevaMarca);
            auto.setmodeloAuto(nuevoModelo);
            auto.setmotorAuto(nuevoMotor);
            auto.setHabilitado(nuevoHabilitado);
        }
    }
    
    public modificarMoto(patenteMoto: number, nuevaMarca: string, nuevoModelo: number, nuevoMotor:string, nuevoHabilitado:boolean): void {
        //validaciones
        if (patenteMoto < 0 || patenteMoto.toString().length !== 4) {
            console.log("La patente debe ser un número positivo de 4 dígitos.");
            return;
        }
        if (nuevaMarca === undefined || nuevaMarca ==="") {
            console.log("La marca no puede ser undefined o estar vacía.");
            return;
        }
        if (nuevoModelo < 0) {
            console.log("El modelo no puede ser un número negativo.");
            return;
        }
        if (nuevoMotor ===undefined || nuevoMotor === "") {
            console.log("El motor no puede ser undefined o estar vacío.");
            return;
        }
        //fin validaciones
        const moto = this.buscarMotoPorPatente(patenteMoto);
        if (moto) {
            moto.setmarcaMoto(nuevaMarca);
            moto.setmodeloMoto(nuevoModelo);
            moto.setmotorMoto(nuevoMotor);
            moto.setHabilitado(nuevoHabilitado);
        }
    }
    
    public modificarCamion(patenteCamion: number, nuevaMarca: string, nuevoModelo: number, nuevoMotor:string, nuevoHabilitado:boolean): void {
        //validaciones
        if (patenteCamion < 0 || patenteCamion.toString().length !== 4) {
            console.log("La patente debe ser un número positivo de 4 dígitos.");
            return;
        }
        if (nuevaMarca === undefined || nuevaMarca ==="") {
            console.log("La marca no puede ser undefined o estar vacía.");
            return;
        }
        if (nuevoModelo < 0) {
            console.log("El modelo no puede ser un número negativo.");
            return;
        }
        if (nuevoMotor ===undefined || nuevoMotor === "") {
            console.log("El motor no puede ser undefined o estar vacío.");
            return;
        }
        //fin validaciones
        const camion = this.buscarCamionPorPatente(patenteCamion);
        if (camion) {
            camion.setmarcaCamion(nuevaMarca);
            camion.setmodeloCamion(nuevoModelo);
            camion.setmotorCamion(nuevoMotor);
            camion.setHabilitado(nuevoHabilitado);
        }
    }
    //fin metodos
}






