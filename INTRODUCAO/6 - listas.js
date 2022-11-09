console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`

// console.log(`Destinos possiveis: `);
// console.log(`${salvador} - ${saoPaulo} - ${rioDeJaneiro}`);

//const listaDeDestinos = new Array(`Salvador`,'São Paulo','Rio de Janeiro',) -- Escrever assim, eu não achei muito visual, tem como fazer uma lista desse jeito:

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
);
//Assim fica mais fácil de visualizar os itens da lista
console.log(listaDeDestinos);

listaDeDestinos.push('Curitiba'); //Adiciona um item ao final da lista

console.log(listaDeDestinos);

listaDeDestinos.splice(1,2); //apaga itens, coloca o ponto inicial e a quantidade de itens a serem deletados.

console.log(listaDeDestinos);