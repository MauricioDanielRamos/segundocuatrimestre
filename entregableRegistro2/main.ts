import { RegistroAutomotor } from "./classRegistro2";
import { Auto } from "./classAuto2";
import { Moto } from "./classMoto2";
import { Camion } from "./classCamion2";


    // Instanciacion de dos registros automotores
    const registro1 = new RegistroAutomotor();
    const registro2 = new RegistroAutomotor();

    // Instanciacion de vehiculos
    const auto1 = new Auto(`AAA111`, `Toyota`, `Corolla`, 4);
    const auto2 = new Auto(`BBB222`, `Ford`, `Focus`, 4);
    const auto3 = new Auto(`CCC333`, `Volkswagen`, `Golf`, 5);//este lo agrego mas abajo al R2
    const moto1 = new Moto(`DDD444`, `Honda`, `CBR600`, 600);
    const moto2 = new Moto(`EEE555`, `Yamaha`, `MT-07`, 700);
    const moto3 = new Moto(`FFF666`, `Suzuki`, `GSX-R750`, 750);
    const camion1 = new Camion(`GGG777`, `Mercedes`,`1114`, 12000);
    const camion2 = new Camion(`HHH888`, `Volvo`, `FH`, 18000);
    const camion3 = new Camion(`III999`, `Scania`, `R-Series`, 15000);

    // Agrego los vehículos al registro1
    registro1.agregarAuto(auto1);
    registro1.agregarMoto(moto1);
    registro1.agregarMoto(moto3);
    registro1.agregarCamion(camion1);

    // Agrego los vehículos al registro2
    registro2.agregarAuto(auto2);
    registro2.agregarMoto(moto2);
    registro2.agregarCamion(camion2);
    registro2.agregarCamion(camion3);

    //Listado de vehiculos del registro1
    console.log(`----- Registro 1 -----`);
    console.log(`Vehículos del Registro 1:`);
    console.log(auto1.getDetalles());
    console.log(moto1.getDetalles());
    console.log(moto3.getDetalles());
    console.log(camion1.getDetalles());

    // Modificar un vehículo en registro1
    console.log(`----`);
    console.log(`Datos del auto 1: `);
    console.log(auto1.getDetalles());
    console.log(`Modifico dato de puertas del Auto 1 en Registro 1...`);
    registro1.modificarAuto(`AAA111`, `Toyota`, `Corolla X`, 5);
    console.log(registro1.buscarAuto(`AAA111`)?.getDetalles());

    // Eliminar una moto en registro1
    console.log(`----`);
    console.log(`Elimino la Moto 1 en Registro 1...`);
    registro1.eliminarMoto(`DDD444`);
    console.log(`Buscar moto eliminada:`);
    console.log(registro1.buscarMoto(`DDD444`)?.getDetalles()); //retorna undefined

    //Listado de vehiculos del registro 2
    console.log(`----`);
    console.log(`----- Registro 2 -----`);
    console.log(`Vehículos del Registro 2:`);
    console.log(auto2.getDetalles());
    console.log(moto2.getDetalles());
    console.log(camion2.getDetalles());
    console.log(camion3.getDetalles());
    
    // Agregar un nuevo auto en el registro2
    console.log(`----`);
    console.log(`Agrego el Auto 3 en Registro 2...`);
    registro2.agregarAuto(auto3);
    console.log(registro2.buscarAuto(`CCC333`)?.getDetalles());

    // Modificar un camion en registro2
    console.log(`----`);
    console.log(`Modifico la carga del Camion 2 en Registro 2...`);
    registro2.modificarCamion(`HHH888`, `Volvo`, `FH`, 22000);
    console.log(registro2.buscarCamion(`HHH888`)?.getDetalles());

    // Eliminar un camion en registro2
    console.log(`----`);
    console.log(`Elimino el Camion 2 en Registro 2...`);
    registro2.eliminarCamion(`FFF666`);
    console.log(`Buscar camion eliminado:`);
    console.log(registro2.buscarCamion(`FFF666`)?.getDetalles()); //retorna undefined

