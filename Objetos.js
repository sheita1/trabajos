//Define un objeto de persona
const individuo = {
    nombreCompleto: "Juan",
    edad: 30,
    genero: "Masculino"
};

// información del individuo
console.log("Detalles del individuo:");
console.log(individuo);
console.log(`Nombre: ${individuo.nombreCompleto}`);
console.log(`Edad: ${individuo.edad}`);
console.log(`Género: ${individuo.genero}`);

// crea un objeto llamado caja
const cajaDeSuministros = {
    cantidadCuadernos: 5,
    cantidadLapices: 10,
    cantidadPapel: 200,
    cantidadFotografias: 15,
    estadoGeneral: "Buen estado"
};

// Imprime el objeto completo
console.log("\nDetalles de la caja de suministros:");
console.log(cajaDeSuministros);

// Imprime cada propiedad y su tipo de dato
console.log(`Cuadernos: ${cajaDeSuministros.cantidadCuadernos}, Tipo: ${typeof cajaDeSuministros.cantidadCuadernos}`);
console.log(`Lápices: ${cajaDeSuministros.cantidadLapices}, Tipo: ${typeof cajaDeSuministros.cantidadLapices}`);
console.log(`Papel: ${cajaDeSuministros.cantidadPapel}, Tipo: ${typeof cajaDeSuministros.cantidadPapel}`);
console.log(`Fotografías: ${cajaDeSuministros.cantidadFotografias}, Tipo: ${typeof cajaDeSuministros.cantidadFotografias}`);
console.log(`Estado: ${cajaDeSuministros.estadoGeneral}, Tipo: ${typeof cajaDeSuministros.estadoGeneral}`);
