// Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);

// Função com retorno
function soma(a, b=0) {
    return a + b;
}

console.log(soma(2, 3));

// Armazenando uma função em uma variavel

const imprimi = function (a, b) {
    console.log(a + b)
}

imprimi(2, 3);

// Armazenando uma função arrow em uma variavel
const some = (a, b) => {
    return a + b
}

console.log(some(2, 3));

// retorno implicito
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));