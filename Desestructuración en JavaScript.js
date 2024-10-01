const usuario = {
    nombre: 'sebastian',
    apellido: 'muñoz',
    edad: 21,
    direccion: {
        calle: 'tome',
        numero: 666,
        ciudad: 'Concepción',
        pais: 'Chile'
    },
    contactos: {
        telefono: '999999',
        email: 'ebastian@example.com',
        redesSociales: {
            instagram: 'sheita',
        }
    },
    intereses: ['video juegos', 'arte', 'futbol']
};

// Desestructuración de propiedades
const { nombre, apellido } = usuario;
const { ciudad } = usuario.direccion;
const [primerInteres] = usuario.intereses;
const { email } = usuario.contactos;
const { instagram } = usuario.contactos.redesSociales;
const { calle: calleUsuario, numero: numeroUsuario } = usuario.direccion;

// Imprimir en consola todas las variables extraídas
console.log(nombre);          // sebastian
console.log(apellido);       // muñoz
console.log(ciudad);         // Concepción
console.log(primerInteres);  // video juegos
console.log(email);          // sebastian@example.com
console.log(instagram);      // sheita
console.log(calleUsuario);   // tome
console.log(numeroUsuario);   // 666
