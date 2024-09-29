import { RegistroAutomotor } from "./classRegistro";
/* import { Auto } from "./classAuto";  //Estan comentados, porque deduzco que vienen incluidos
import { Camion } from "./classCamion"; //desde la class RegistroAutomotor
import { Moto } from "./classMoto"; */

    //instanciacion de registros
    const registro1: RegistroAutomotor = new RegistroAutomotor(); 
    const registro2: RegistroAutomotor = new RegistroAutomotor(); 

    //asignacion de vehiculos a los registros
    registro1.asignarAuto("Audi",2020,1234,"Audi", true);
    registro1.asignarAuto("Chevrolet",2016,3456,"Corsa",true);
    registro1.asignarAuto("Ford",2001,5496,"Ford",true);

    registro2.asignarAuto("Kia",2022,6128,"Honda",true);
    registro2.asignarAuto("BMW",2019,5371,"BMW",true);

    registro1.asignarMoto("Honda",2018,5239,"Honda",true);
    registro1.asignarMoto("Kawasaki",2017,8914,"Kawasaki",true);
    registro1.asignarMoto("Motomel",2006,4974,"Motomel",true);

    registro2.asignarMoto("Benelli",2023,9112,"Benelli",true);
    registro2.asignarMoto("BMW",2011,4747,"BMW",true);

    registro1.asignarCamion("Scania",2024,9998,"Scania",true);
    registro1.asignarCamion("Iveco",2008,6510,"Iveco",true);
    registro1.asignarCamion("Ford",2006,6464,"Ford",true);

    registro2.asignarCamion("Mercedes Benz",1990,2569,"Mercedes Benz",true);
    registro2.asignarCamion("Mack",2000,3497,"Mack",true);

    //algunos metodos utilizados
const motoEncontrada = registro1.buscarMotoPorPatente(8914);
if (motoEncontrada) {
    console.log(`Moto encontrada: ${motoEncontrada}`);
} else {
    console.log("Moto no encontrada.");
}

const autoEncontrado = registro1.buscarAutoPorPatente(123);
if (autoEncontrado) {
    console.log(`Auto encontrado: ${autoEncontrado}`);
} else {
    console.log("Auto no encontrado.");
}
    
const camionEncontrado = registro1.buscarCamionPorPatente(9998);
if (camionEncontrado) {
    console.log(`Camion encontrado: ${camionEncontrado}`);
} else {
    console.log("Camion no encontrado.");
}

registro1.quitarAuto(1234);
console.log(`Auto con patente 1234 eliminado`);
console.log(registro1);
    
registro2.modificarAuto(5371,"Citroen",1960,"2CV",true);
console.log(`Auto con patente 5371 fue modificado`); //${registro2.buscarAutoPorPatente(5371)} 
console.log(registro2);
