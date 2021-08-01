let dobro = function(a) {
    return 2*a
}

dobro = (a) => {
    return2*a
}

dobro = a => 2*a // return implícito
console.log(dobro(3))

let ola = function() {
    return "ola"
}

ola = () => "ola"
ola = _ => "ola" // possui um parametro 

console.log(ola())