export class Auto{
	//propiedades
    private marcaAuto:string;
    private modeloAuto:number;
    private patenteAuto:number;
    private motorAuto: string;
    private habilitadoCircular:boolean;
	//fin propiedades
    
	//constructor
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
	//fin constructor

	//metodos
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

	public toString(): string {
        return `Auto: ${this.marcaAuto} - Modelo: ${this.modeloAuto} - Patente: ${this.patenteAuto} - Motor: ${this.motorAuto} - Habilitado: ${this.habilitadoCircular}`;
    }
	//fin metodos
}