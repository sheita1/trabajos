// convierte un string a mayúsculas
function aMayusculas(str) {
    return str.toUpperCase();
}

// convierte un string a minúsculas
function aMinusculas(str) {
    return str.toLowerCase();
}

// resta dos números
function resta(num1, num2) {
    return num1 - num2;
}

//division dos números
function division(num1, num2) {
    if (num2 === 0) {
        return "No se puede dividir entre cero";
    }
    return num1 / num2;
}

// multiplicidad de dos números
function multiplicacion(num1, num2) {
    return num1 * num2;
}

// longitud de un string
function longitudString(str) {
    return str.length;
}

// Ejemplos
console.log(aMayusculas("hola")); // HOLA
console.log(aMinusculas("HOLA")); // hola
console.log(resta(20, 10)); // 10
console.log(division(20, 5)); // 4
console.log(division(20, 0)); // No se puede dividir entre cero
console.log(multiplicacion(10, 5)); // 50
console.log(longitudString("Hola mundo")); // 10
