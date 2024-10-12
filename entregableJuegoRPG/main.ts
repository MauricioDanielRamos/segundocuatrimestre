import { Arquero } from "./classArquero";
import { Guerrero } from "./classGuerrero";
import { Mago } from "./classMago";

const mago= new Mago (`Merlin`,1,60,80);
const arquero = new Arquero(`Legolas`,1,80,50);
const guerrero = new Guerrero(`Aramir`,1,120,40);

console.log(`****************`);
console.log(`${mago.getNombre()} tiene ${mago.getPuntosVidaAlInicio()} puntos de vida`)
console.log(mago.atacar());
console.log(mago.subirNivel());
console.log(mago.defender());
console.log(`${mago.getNombre()} tiene ${mago.getPuntosVida()} puntos de vida`);
console.log(`****************`);
console.log(`${arquero.getNombre()} tiene ${arquero.getPuntosVidaAlInicio()} puntos de vida`);
console.log(arquero.atacar());
console.log(arquero.subirNivel());
console.log(arquero.defender());
console.log(`${arquero.getNombre()} tiene ${arquero.getPuntosVida()} puntos de vida`);
console.log(`****************`);
console.log(`${guerrero.getNombre()} tiene ${guerrero.getPuntosVidaAlInicio()} puntos de vida`);
console.log(guerrero.atacar());
console.log(guerrero.subirNivel());
console.log(guerrero.defender());
console.log(`${guerrero.getNombre()} tiene ${guerrero.getPuntosVida()} puntos de vida`);




