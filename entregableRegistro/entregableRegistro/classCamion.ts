export class Camion{
	//propiedades
    private marcaCamion:string;
    private modeloCamion:number;
    private patenteCamion:number;
    private motorCamion: string;
    private habilitadoCircular:boolean;
	//fin propiedades

	//constructor
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
	//fin constructor

	//metodos
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

	public toString(): string {
        return `Camion: ${this.marcaCamion} - Modelo: ${this.modeloCamion} - Patente: ${this.patenteCamion} - Motor: ${this.motorCamion} - Habilitado: ${this.habilitadoCircular}`;
    }
	//fin metodos
}
