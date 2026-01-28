"use strict";
const lista = [10, 20, 30];
let soma = 0;
lista.forEach((num) => {
    soma += num;
    console.log("Somando... total parcial:", soma); // Coloque um Breakpoint aqui!
});
console.log("Resultado final:", soma);
