export class Moto{
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

	public toString(): string {
        return `Moto: ${this.marcaMoto} - Modelo: ${this.modeloMoto} - Patente: ${this.patenteMoto} - Motor: ${this.motorMoto} - Habilitado: ${this.habilitadoCircular}`;
    }
}
