import { RegistroAutomotor , Autos, Motos, Camiones } from "./class";


    const auto1: Autos = new Autos("Audi",2020,1234,"Audi", true);
    const auto2: Autos = new Autos("Chevrolet",2016,3456,"Corsa",true);
    const auto3: Autos = new Autos("Ford",2001,5496,"Ford",true);
    const auto4: Autos = new Autos("Kia",2022,6128,"Honda",true);
    const auto5: Autos = new Autos("BMW",2019,5371,"BMW",true);

    const moto1: Motos = new Motos("Honda",2018,5239,"Honda",true);
    const moto2: Motos = new Motos("Kawasaki",2017,8914,"Kawasaki",true);
    const moto3: Motos = new Motos("Motomel",2006,4974,"Motomel",true);
    const moto4: Motos = new Motos("Benelli",2023,9112,"Benelli",true);
    const moto5: Motos = new Motos("BMW",2011,4747,"BMW",true);

    const camion1: Camiones = new Camiones("Scania",2024,9998,"Scania",true);
    const camion2: Camiones = new Camiones("Iveco",2008,6510,"Iveco",true);
    const camion3: Camiones = new Camiones("Ford",2006,6464,"Ford",true);
    const camion4: Camiones = new Camiones("Mercedes Benz",1990,2569,"Mercedes Benz",true);
    const camion5: Camiones = new Camiones("Mack",2000,3497,"Mack",true);

    const registro1: RegistroAutomotor = new RegistroAutomotor(); 
    const registro2: RegistroAutomotor = new RegistroAutomotor(); 

    registro1.asignarAuto(auto1);
    registro1.asignarAuto(auto2);
    registro1.asignarAuto(auto3);

    registro2.asignarAuto(auto4);
    registro2.asignarAuto(auto5);

    registro1.asignarMoto(moto1);
    registro1.asignarMoto(moto2);
    registro1.asignarMoto(moto3);

    registro2.asignarMoto(moto4);
    registro2.asignarMoto(moto5);

    registro1.asignarCamion(camion1);
    registro1.asignarCamion(camion2);
    registro1.asignarCamion(camion3);

    registro2.asignarCamion(camion4);
    registro2.asignarCamion(camion5);

    /* console.log(`El auto antes de la modificacion es: `+ auto1);
    
    registro1.modificarAuto(1234,"ford",2000,"ford",true);
    
    console.log(`El auto despues d la modificacion es: `+ auto1); */

    console.log(registro1);
    
    registro1.quitarAuto(1234);

    console.log(registro1); 
    

    /* console.log(`La moto antes de la modificacion es: `+ moto4);
    
    registro2.modificarMoto(9112,"Suzuki",2024,"Suzuki",true);

    console.log(`La moto despues de la modificacion es: `+moto4); */

    

    console.log(`La moto encontrada por numero de patente es: `+ registro1.buscarMotoPorPatente(8914));
    
    

    /* auto1.getmarcaAuto();
    console.log(auto1.getmarcaAuto());

    console.log(auto1.getHabilitado()); */
    


    
    