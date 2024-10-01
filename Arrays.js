//suma todos los números de un array
function sumaArray(numeros) {
    return numeros.reduce((acumulador, num) => acumulador + num, 0);
}

// calcula el promedio de los números de un array
function promedioArray(numeros) {
    if (numeros.length === 0) return 0; // Evitar división por cero
    const suma = sumaArray(numeros);
    return suma / numeros.length;
}

// convertir un arreglo de strings a mayúsculas
function mayusculasArray(strings) {
    return strings.map(str => str.toUpperCase());
}

// filtra los números pares de un arreglo
function paresArray(numeros) {
    return numeros.filter(num => num % 2 === 0);
}

// Ejemplos
const numeros = [1, 2, 3, 4, 5];
console.log(sumaArray(numeros)); // 15
console.log(promedioArray(numeros)); // 3
console.log(mayusculasArray(['hola', 'mundo'])); // ['HOLA', 'MUNDO']
console.log(paresArray(numeros)); // [2, 4]
