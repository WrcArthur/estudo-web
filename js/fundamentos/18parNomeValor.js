const saudacao = 'opa'

function exec() {
    const saudacao = 'falaa'
    return saudacao
}

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: { 
        logradouro: 'Rua São Luís',
        numero: 553
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)