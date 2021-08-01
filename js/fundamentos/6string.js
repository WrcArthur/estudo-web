const escola = "arthur";

console.log(escola.charAt(4)); //mostra o que está na posiçao 4
console.log(escola.charCodeAt('3')); //mostra o valor na tabela ASKII
console.log(escola.indexOf('r')); //mostra o a posiçao do valor declarado
console.log(escola.substring(1)); //mostra tudo a partir da posiução 1
console.log(escola.substring(0, 3)); //mostra tudo entre a posição 0 e 3, exceto o 3

console.log('Ele é o '.concat(escola).concat(' bom!')); //acrecenta
console.log('Ele é o ' + (escola) + (' bom!'));
console.log(escola.replace('u', 'o')); //substitui

console.log('Ana,Maria,Braga'.split(','));