/*
Modularização é um uma ferramente importante para organização
e manutenção de código. 

Arquivos js iniciaos em maiusculas são aqueles que representam classes

Porém, ao dividir o programa em vários arquivos, precicamos exportar e importar o código.

*/


//Utilizamos o export para exportar a definição da classe cliente.

/*
Para importar nós devemos ter um package .json para modular nossos arquivos. Inclusive nossos arquivos.

Para criar um arquivo json basta dar npm init no console.
*/



export class Cliente{
    get cpf(){
        return this._cpf
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf
    }
//o construtor é uma padrão de como sera construida a classe, ele é um parametro na hora de chamarmos a classe. Isso poupa nosso tempo, por que nos parametros nos colocamos a informação do construtor, assim agilizando o trabalho.

}