export class RegistroAutomotor {
    private autos : Autos [] = [];
    private camiones : Camiones [] = [];
    private motos : Motos [] = [];

    constructor(autos: Autos[] = [], camiones: Camiones[] = [], motos: Motos[] = []) {
        this.autos = autos;
        this.camiones = camiones;
        this.motos = motos;
    }

    public asignarAuto(auto: Autos): void {
        this.autos.push(auto);
    }

    public asignarMoto(moto: Motos): void {
        this.motos.push(moto);
    }

    public asignarCamion(camion: Camiones): void {
        this.camiones.push(camion);
    }

    /* public getAuto(): Autos[] {
        return this.autos;
    }

    public getMoto(): Motos[] {
        return this.motos;
    }

    public getCamion(): Camiones[] {
        return this.camiones;
    } */

    public buscarAutoPorPatente(patenteAuto: number): Autos | undefined {
        return this.autos.find(auto => auto.getpatenteAuto() === patenteAuto);
    }
    
    public buscarMotoPorPatente(patenteMoto: number): Motos | undefined {
        return this.motos.find(moto => moto.getpatenteMoto() === patenteMoto);
    }
    
    public buscarCamionPorPatente(patenteCamion: number): Camiones | undefined {
        return this.camiones.find(camion => camion.getpatenteCamion() === patenteCamion);
    }
    

    public quitarAuto(patenteAuto: number): void {
        this.autos = this.autos.filter((auto) => auto.getpatenteAuto() !== patenteAuto);
    }

    public quitarMoto(patenteMoto: number): void {
        this.motos = this.motos.filter((moto) => moto.getpatenteMoto() !== patenteMoto);
    }

    public quitarCamion(patenteCamion: number): void {
        this.camiones = this.camiones.filter((camion) => camion.getpatenteCamion() !== patenteCamion);
    }

    public modificarAuto(patenteAuto: number, nuevaMarca: string, nuevoModelo: number, nuevoMotor:string, nuevoHabilitado:boolean): void {
        const auto = this.buscarAutoPorPatente(patenteAuto);
        if (auto) {
            auto.setmarcaAuto(nuevaMarca);
            auto.setmodeloAuto(nuevoModelo);
            auto.setmotorAuto(nuevoMotor);
            auto.setHabilitado(nuevoHabilitado);
        }
    }
    
    public modificarMoto(patenteMoto: number, nuevaMarca: string, nuevoModelo: number, nuevoMotor:string, nuevoHabilitado:boolean): void {
        const moto = this.buscarMotoPorPatente(patenteMoto);
        if (moto) {
            moto.setmarcaMoto(nuevaMarca);
            moto.setmodeloMoto(nuevoModelo);
            moto.setmotorMoto(nuevoMotor);
            moto.setHabilitado(nuevoHabilitado);
        }
    }
    
    public modificarCamion(patenteCamion: number, nuevaMarca: string, nuevoModelo: number, nuevoMotor:string, nuevoHabilitado:boolean): void {
        const camion = this.buscarCamionPorPatente(patenteCamion);
        if (camion) {
            camion.setmarcaCamion(nuevaMarca);
            camion.setmodeloCamion(nuevoModelo);
            camion.setmotorCamion(nuevoMotor);
            camion.setHabilitado(nuevoHabilitado);
        }
    }
    
}

export class Autos{
    private marcaAuto:string;
    private modeloAuto:number;
    private patenteAuto:number;
    private motorAuto: string;
    private habilitadoCircular:boolean;

	constructor(marcaAuto:string,modeloAuto:number,patenteAuto:number,motorAuto:string,habilitadoCircular?:boolean) {
        this.marcaAuto = marcaAuto;
        this.modeloAuto = modeloAuto;
        this.patenteAuto = patenteAuto;
        this.motorAuto = motorAuto;
        if (habilitadoCircular == undefined){
            this.habilitadoCircular = false;
        }else{
            this.habilitadoCircular = true;
        };
        
	}

	public getmarcaAuto(): string {
		return this.marcaAuto;
	}

	public setmarcaAuto(value: string) {
		this.marcaAuto = value;
	}

	public getmodeloAuto(): number {
		return this.modeloAuto;
	}

	public setmodeloAuto(value: number) {
		this.modeloAuto = value;
	}

	public getpatenteAuto(): number {
		return this.patenteAuto;
	}

	public setpatenteAuto(value: number) {
		this.patenteAuto = value;
	}
    
	public getmotorAuto(): string {
		return this.motorAuto;
	}

	public setmotorAuto(value: string) {
		this.motorAuto = value;
	}

    public getHabilitado():boolean{
        return this.habilitadoCircular;
    }

    public setHabilitado(value: boolean){
        this.habilitadoCircular = value;
    }
}

export class Motos{
    private marcaMoto:string;
    private modeloMoto:number;
    private patenteMoto:number;
    private motorMoto: string;
    private habilitadoCircular:boolean;

    constructor(marcaMoto:string,modeloMoto:number,patenteMoto:number,motorMoto:string,habilitadoCircular?:boolean) {
        this.marcaMoto = marcaMoto;
        this.modeloMoto = modeloMoto;
        this.patenteMoto = patenteMoto;
        this.motorMoto = motorMoto;
        if (habilitadoCircular == undefined){
            this.habilitadoCircular = false;
        }else{
            this.habilitadoCircular = true;
        };
        
	}

	public getmarcaMoto(): string {
		return this.marcaMoto;
	}

	public setmarcaMoto(value: string) {
		this.marcaMoto = value;
	}

	public getmodeloMoto(): number {
		return this.modeloMoto;
	}

	public setmodeloMoto(value: number) {
		this.modeloMoto = value;
	}

	public getpatenteMoto(): number {
		return this.patenteMoto;
	}

	public setpatenteMoto(value: number) {
		this.patenteMoto = value;
	}

	public getmotorMoto(): string {
		return this.motorMoto;
	}

	public setmotorMoto(value: string) {
		this.motorMoto = value;
	}

    public getHabilitado():boolean{
        return this.habilitadoCircular;
    }

    public setHabilitado(value: boolean){
        this.habilitadoCircular = value;
    }
}

export class Camiones{
    private marcaCamion:string;
    private modeloCamion:number;
    private patenteCamion:number;
    private motorCamion: string;
    private habilitadoCircular:boolean;

	constructor(marcaCamiones:string,modeloCamiones:number,patenteCamiones:number,motorCamiones:string,habilitadoCircular?:boolean) {
        this.marcaCamion = marcaCamiones;
        this.modeloCamion = modeloCamiones;
        this.patenteCamion = patenteCamiones;
        this.motorCamion = motorCamiones;
        if (habilitadoCircular == undefined){
            this.habilitadoCircular = false;
        }else{
            this.habilitadoCircular = true;
        };
        
	}

	public getmarcaCamion(): string {
		return this.marcaCamion;
	}

	public setmarcaCamion(value: string) {
		this.marcaCamion = value;
	}

	public getmodeloCamion(): number {
		return this.modeloCamion;
	}

	public setmodeloCamion(value: number) {
		this.modeloCamion = value;
	}

	public getpatenteCamion(): number {
		return this.patenteCamion;
	}

	public setpatenteCamion(value: number) {
		this.patenteCamion = value;
	}

	public getmotorCamion(): string {
		return this.motorCamion;
	}

	public setmotorCamion(value: string) {
		this.motorCamion = value;
	}

    public getHabilitado():boolean{
        return this.habilitadoCircular;
    }

    public setHabilitado(value: boolean){
        this.habilitadoCircular = value;
    }
}


