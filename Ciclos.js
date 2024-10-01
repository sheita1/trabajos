// Imprime los números del 1 al 10
console.log("Números del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Imprime los números del 10 al 1
console.log("\nNúmeros del 10 al 1:");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Imprime los números del 1 al 10 pares
console.log("\nNúmeros del 1 al 10 (pares):");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Imprime los números del 1 al 10 impares
console.log("\nNúmeros del 1 al 10 (impares):");
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Imprime los números del 1 al 10 múltiplos de 3
console.log("\nNúmeros del 1 al 10 (múltiplos de 3):");
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//Imprime los números del 1 al 10 múltiplos de 5
console.log("\nNúmeros del 1 al 10 (múltiplos de 5):");
for (let i = 1; i <= 10; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

// Imprime los números del 1 al 10 múltiplos de 3 y 5
console.log("\nNúmeros del 1 al 10 (múltiplos de 3 y 5):");
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

// Imprime los números del 1 al 10 múltiplos de 3 o 5
console.log("\nNúmeros del 1 al 10 (múltiplos de 3 o 5):");
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
    }
}
