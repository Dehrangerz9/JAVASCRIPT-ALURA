/*
classe > estrutura que vai ser reflicada
Serve pra gente economizar tempo e pô, utilizar coisas
que são repetidas.

As "variaveis" de uma classe são chamadas de atributos ou propriedades.

classe é molde, e utilizamos elees para criar objetos//estancias.
*/

//Parte de modulurização, importar coisas segue essa estrutura;
import {Cliente} from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SIstemaAutenticacao.js"


const diretor = new Diretor("Luiz", 10000,12345678999);
const gerente = new Gerente("Ana Luiza",5000,45645645699);

diretor.cadastrarSenha("123");
gerente.cadastrarSenha("456");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente,"456");

console.log(diretorEstaLogado, gerenteEstaLogado)
