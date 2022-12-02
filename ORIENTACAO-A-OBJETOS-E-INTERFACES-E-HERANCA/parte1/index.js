/*
classe > estrutura que vai ser reflicada
Serve pra gente economizar tempo e pô, utilizar coisas
que são repetidas.

As "variaveis" de uma classe são chamadas de atributos ou propriedades.

classe é molde, e utilizamos elees para criar objetos//estancias.
*/

//Parte de modulurização, importar coisas segue essa estrutura;
import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js";
//utilização de classe.
const cliente1 = new Cliente("Ricardo", 11122233309);

//Declaramos uma variavel e dentro dela havera os elementos da classe. É bem melhor que declarar uma variavel para cada atributo que um cliente teria.
//O pararenteses vazio serve pra chamar a função. Ele não recebe parametro. O new serve para criar um novo obj com base na classe cliente.

console.log(cliente1)

//Para acessar uma propriedade, basta usar o ponto e escrever o nome dela. O cliente 1 é um objeto que pode ser acessado.

const conta2 = new ContaCorrente(null,2005)
conta2.cliente = new Cliente("Alice", 22233344409); //estamos estanciando.
console.log(cliente1.nome)
//exporta só o nome do cliente 1.


console.log(cliente1,conta2)

const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.cliente = cliente1;

const conta3 = new ContaCorrente();
conta3.cliente = new Cliente();
//conta3.cliente = null [Serve para não ocupar um espaço na memoria. A diferença dele pra undefined, é que o nulo alguem mandou o computador ocupar o espaço com o null]
conta3.depositar(500)
console.log(ContaCorrenteRicardo)

conta3.transferir(500,conta2)
console.log(conta2,conta3)
console.log(ContaCorrente.numerodeContas)
