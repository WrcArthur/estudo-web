function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto("Notebook", 2200))
console.log(criarProduto("Fone", 80))
console.log(criarProduto("Celular", 1200))