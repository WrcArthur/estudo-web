const alunos = [
    {nome:'João', nota:7.3, bolsista: true},
    {nome:'Maria', nota:9.2, bolsista: true},
    {nome:'Pedro', nota:9.8, bolsista: true},
    {nome:'Ana', nota:8.7, bolsista: false},
]

// Desafio 1: Todos os alunos são bolsistas?
console.log("Todos os alunos são bolsistas?")

const resultado= alunos.map(a=>a.bolsista).reduce(function(acumulador, atual){
    return acumulador*atual
})

if(resultado!=0) console.log("Sim")
    else console.log("Não")

// Desafio 2: Algum aluno é bolsista?
console.log("Algum aluno é bolsista?")

const resultado2= alunos.map(a=>a.bolsista).reduce(function(acumulador, atual){
    return acumulador+atual
})

if(resultado2>0) console.log("Sim")
    else console.log("Não")