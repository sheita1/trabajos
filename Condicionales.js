const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

// Imprime el número mayor
const mayor = Math.max(numero1, numero2, numero3);
console.log(`El número mayor es: ${mayor}`);

// Imprime el número menor
const menor = Math.min(numero1, numero2, numero3);
console.log(`El número menor es: ${menor}`);

// verifica si un número es par o impar
function esPar(num) {
    return num % 2 === 0;
}

// Imprimesi numero1 es par o impar
console.log(`numero1 es ${esPar(numero1) ? 'par' : 'impar'}`);

// Imprime si numero2 es par o impar
console.log(`numero2 es ${esPar(numero2) ? 'par' : 'impar'}`);

// Imprime si numero3 es par o impar
console.log(`numero3 es ${esPar(numero3) ? 'par' : 'impar'}`);

// verifica si un número es múltiplo de 5
function esMultiploDe5(num) {
    return num % 5 === 0;
}

